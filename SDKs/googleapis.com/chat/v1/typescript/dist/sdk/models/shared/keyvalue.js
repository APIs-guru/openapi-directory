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
import { Button } from "./button";
import { OnClick } from "./onclick";
export var KeyValueIconEnum;
(function (KeyValueIconEnum) {
    KeyValueIconEnum["IconUnspecified"] = "ICON_UNSPECIFIED";
    KeyValueIconEnum["Airplane"] = "AIRPLANE";
    KeyValueIconEnum["Bookmark"] = "BOOKMARK";
    KeyValueIconEnum["Bus"] = "BUS";
    KeyValueIconEnum["Car"] = "CAR";
    KeyValueIconEnum["Clock"] = "CLOCK";
    KeyValueIconEnum["ConfirmationNumberIcon"] = "CONFIRMATION_NUMBER_ICON";
    KeyValueIconEnum["Dollar"] = "DOLLAR";
    KeyValueIconEnum["Description"] = "DESCRIPTION";
    KeyValueIconEnum["Email"] = "EMAIL";
    KeyValueIconEnum["EventPerformer"] = "EVENT_PERFORMER";
    KeyValueIconEnum["EventSeat"] = "EVENT_SEAT";
    KeyValueIconEnum["FlightArrival"] = "FLIGHT_ARRIVAL";
    KeyValueIconEnum["FlightDeparture"] = "FLIGHT_DEPARTURE";
    KeyValueIconEnum["Hotel"] = "HOTEL";
    KeyValueIconEnum["HotelRoomType"] = "HOTEL_ROOM_TYPE";
    KeyValueIconEnum["Invite"] = "INVITE";
    KeyValueIconEnum["MapPin"] = "MAP_PIN";
    KeyValueIconEnum["Membership"] = "MEMBERSHIP";
    KeyValueIconEnum["MultiplePeople"] = "MULTIPLE_PEOPLE";
    KeyValueIconEnum["Offer"] = "OFFER";
    KeyValueIconEnum["Person"] = "PERSON";
    KeyValueIconEnum["Phone"] = "PHONE";
    KeyValueIconEnum["RestaurantIcon"] = "RESTAURANT_ICON";
    KeyValueIconEnum["ShoppingCart"] = "SHOPPING_CART";
    KeyValueIconEnum["Star"] = "STAR";
    KeyValueIconEnum["Store"] = "STORE";
    KeyValueIconEnum["Ticket"] = "TICKET";
    KeyValueIconEnum["Train"] = "TRAIN";
    KeyValueIconEnum["VideoCamera"] = "VIDEO_CAMERA";
    KeyValueIconEnum["VideoPlay"] = "VIDEO_PLAY";
})(KeyValueIconEnum || (KeyValueIconEnum = {}));
// KeyValue
/**
 * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
**/
var KeyValue = /** @class */ (function (_super) {
    __extends(KeyValue, _super);
    function KeyValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomLabel" }),
        __metadata("design:type", String)
    ], KeyValue.prototype, "bottomLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=button" }),
        __metadata("design:type", Button)
    ], KeyValue.prototype, "button", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], KeyValue.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentMultiline" }),
        __metadata("design:type", Boolean)
    ], KeyValue.prototype, "contentMultiline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], KeyValue.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], KeyValue.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onClick" }),
        __metadata("design:type", OnClick)
    ], KeyValue.prototype, "onClick", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLabel" }),
        __metadata("design:type", String)
    ], KeyValue.prototype, "topLabel", void 0);
    return KeyValue;
}(SpeakeasyBase));
export { KeyValue };
