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
import { CreateImageResponse } from "./createimageresponse";
import { CreateLineResponse } from "./createlineresponse";
import { CreateShapeResponse } from "./createshaperesponse";
import { CreateSheetsChartResponse } from "./createsheetschartresponse";
import { CreateSlideResponse } from "./createslideresponse";
import { CreateTableResponse } from "./createtableresponse";
import { CreateVideoResponse } from "./createvideoresponse";
import { DuplicateObjectResponse } from "./duplicateobjectresponse";
import { GroupObjectsResponse } from "./groupobjectsresponse";
import { ReplaceAllShapesWithImageResponse } from "./replaceallshapeswithimageresponse";
import { ReplaceAllShapesWithSheetsChartResponse } from "./replaceallshapeswithsheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
// Response
/**
 * A single response from an update.
**/
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createImage" }),
        __metadata("design:type", CreateImageResponse)
    ], Response.prototype, "createImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createLine" }),
        __metadata("design:type", CreateLineResponse)
    ], Response.prototype, "createLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createShape" }),
        __metadata("design:type", CreateShapeResponse)
    ], Response.prototype, "createShape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSheetsChart" }),
        __metadata("design:type", CreateSheetsChartResponse)
    ], Response.prototype, "createSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSlide" }),
        __metadata("design:type", CreateSlideResponse)
    ], Response.prototype, "createSlide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTable" }),
        __metadata("design:type", CreateTableResponse)
    ], Response.prototype, "createTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createVideo" }),
        __metadata("design:type", CreateVideoResponse)
    ], Response.prototype, "createVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateObject" }),
        __metadata("design:type", DuplicateObjectResponse)
    ], Response.prototype, "duplicateObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupObjects" }),
        __metadata("design:type", GroupObjectsResponse)
    ], Response.prototype, "groupObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithImage" }),
        __metadata("design:type", ReplaceAllShapesWithImageResponse)
    ], Response.prototype, "replaceAllShapesWithImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithSheetsChart" }),
        __metadata("design:type", ReplaceAllShapesWithSheetsChartResponse)
    ], Response.prototype, "replaceAllShapesWithSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllText" }),
        __metadata("design:type", ReplaceAllTextResponse)
    ], Response.prototype, "replaceAllText", void 0);
    return Response;
}(SpeakeasyBase));
export { Response };
