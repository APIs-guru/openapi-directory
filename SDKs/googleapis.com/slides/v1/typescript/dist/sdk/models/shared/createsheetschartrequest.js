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
import { PageElementProperties } from "./pageelementproperties";
export var CreateSheetsChartRequestLinkingModeEnum;
(function (CreateSheetsChartRequestLinkingModeEnum) {
    CreateSheetsChartRequestLinkingModeEnum["NotLinkedImage"] = "NOT_LINKED_IMAGE";
    CreateSheetsChartRequestLinkingModeEnum["Linked"] = "LINKED";
})(CreateSheetsChartRequestLinkingModeEnum || (CreateSheetsChartRequestLinkingModeEnum = {}));
// CreateSheetsChartRequest
/**
 * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
**/
var CreateSheetsChartRequest = /** @class */ (function (_super) {
    __extends(CreateSheetsChartRequest, _super);
    function CreateSheetsChartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chartId" }),
        __metadata("design:type", Number)
    ], CreateSheetsChartRequest.prototype, "chartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elementProperties" }),
        __metadata("design:type", PageElementProperties)
    ], CreateSheetsChartRequest.prototype, "elementProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkingMode" }),
        __metadata("design:type", String)
    ], CreateSheetsChartRequest.prototype, "linkingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], CreateSheetsChartRequest.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spreadsheetId" }),
        __metadata("design:type", String)
    ], CreateSheetsChartRequest.prototype, "spreadsheetId", void 0);
    return CreateSheetsChartRequest;
}(SpeakeasyBase));
export { CreateSheetsChartRequest };
