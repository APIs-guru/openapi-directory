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
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1GridItem } from "./googleappscardv1griditem";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
// GoogleAppsCardV1Grid
/**
 * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 }, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" } } } ```
**/
var GoogleAppsCardV1Grid = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1Grid, _super);
    function GoogleAppsCardV1Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borderStyle" }),
        __metadata("design:type", GoogleAppsCardV1BorderStyle)
    ], GoogleAppsCardV1Grid.prototype, "borderStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnCount" }),
        __metadata("design:type", Number)
    ], GoogleAppsCardV1Grid.prototype, "columnCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleAppsCardV1GridItem }),
        __metadata("design:type", Array)
    ], GoogleAppsCardV1Grid.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onClick" }),
        __metadata("design:type", GoogleAppsCardV1OnClick)
    ], GoogleAppsCardV1Grid.prototype, "onClick", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Grid.prototype, "title", void 0);
    return GoogleAppsCardV1Grid;
}(SpeakeasyBase));
export { GoogleAppsCardV1Grid };
