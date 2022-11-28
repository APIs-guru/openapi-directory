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
import { GridRange } from "./gridrange";
// FindReplaceRequest
/**
 * Finds and replaces data in cells over a range, sheet, or all sheets.
**/
var FindReplaceRequest = /** @class */ (function (_super) {
    __extends(FindReplaceRequest, _super);
    function FindReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allSheets" }),
        __metadata("design:type", Boolean)
    ], FindReplaceRequest.prototype, "allSheets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=find" }),
        __metadata("design:type", String)
    ], FindReplaceRequest.prototype, "find", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeFormulas" }),
        __metadata("design:type", Boolean)
    ], FindReplaceRequest.prototype, "includeFormulas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchCase" }),
        __metadata("design:type", Boolean)
    ], FindReplaceRequest.prototype, "matchCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchEntireCell" }),
        __metadata("design:type", Boolean)
    ], FindReplaceRequest.prototype, "matchEntireCell", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", GridRange)
    ], FindReplaceRequest.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacement" }),
        __metadata("design:type", String)
    ], FindReplaceRequest.prototype, "replacement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchByRegex" }),
        __metadata("design:type", Boolean)
    ], FindReplaceRequest.prototype, "searchByRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetId" }),
        __metadata("design:type", Number)
    ], FindReplaceRequest.prototype, "sheetId", void 0);
    return FindReplaceRequest;
}(SpeakeasyBase));
export { FindReplaceRequest };
