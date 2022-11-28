var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1CardAction } from "./googleappscardv1cardaction";
import { GoogleAppsCardV1CardFixedFooter } from "./googleappscardv1cardfixedfooter";
import { GoogleAppsCardV1CardHeader } from "./googleappscardv1cardheader";
import { GoogleAppsCardV1Section } from "./googleappscardv1section";
export var GoogleAppsCardV1CardDisplayStyleEnum;
(function (GoogleAppsCardV1CardDisplayStyleEnum) {
    GoogleAppsCardV1CardDisplayStyleEnum["DisplayStyleUnspecified"] = "DISPLAY_STYLE_UNSPECIFIED";
    GoogleAppsCardV1CardDisplayStyleEnum["Peek"] = "PEEK";
    GoogleAppsCardV1CardDisplayStyleEnum["Replace"] = "REPLACE";
})(GoogleAppsCardV1CardDisplayStyleEnum || (GoogleAppsCardV1CardDisplayStyleEnum = {}));
// GoogleAppsCardV1Card
/**
 * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
**/
var GoogleAppsCardV1Card = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1Card, _super);
    function GoogleAppsCardV1Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardActions", elemType: GoogleAppsCardV1CardAction }),
        __metadata("design:type", Array)
    ], GoogleAppsCardV1Card.prototype, "cardActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayStyle" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Card.prototype, "displayStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedFooter" }),
        __metadata("design:type", GoogleAppsCardV1CardFixedFooter)
    ], GoogleAppsCardV1Card.prototype, "fixedFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", GoogleAppsCardV1CardHeader)
    ], GoogleAppsCardV1Card.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Card.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peekCardHeader" }),
        __metadata("design:type", GoogleAppsCardV1CardHeader)
    ], GoogleAppsCardV1Card.prototype, "peekCardHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sections", elemType: GoogleAppsCardV1Section }),
        __metadata("design:type", Array)
    ], GoogleAppsCardV1Card.prototype, "sections", void 0);
    return GoogleAppsCardV1Card;
}(SpeakeasyBase));
export { GoogleAppsCardV1Card };
