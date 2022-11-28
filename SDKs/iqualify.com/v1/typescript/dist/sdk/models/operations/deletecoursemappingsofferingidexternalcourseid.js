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
import * as shared from "../shared";
var DeleteCourseMappingsOfferingIdExternalCourseIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteCourseMappingsOfferingIdExternalCourseIdPathParams, _super);
    function DeleteCourseMappingsOfferingIdExternalCourseIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalCourseId" }),
        __metadata("design:type", String)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdPathParams.prototype, "externalCourseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdPathParams.prototype, "offeringId", void 0);
    return DeleteCourseMappingsOfferingIdExternalCourseIdPathParams;
}(SpeakeasyBase));
export { DeleteCourseMappingsOfferingIdExternalCourseIdPathParams };
var DeleteCourseMappingsOfferingIdExternalCourseIdRequest = /** @class */ (function (_super) {
    __extends(DeleteCourseMappingsOfferingIdExternalCourseIdRequest, _super);
    function DeleteCourseMappingsOfferingIdExternalCourseIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCourseMappingsOfferingIdExternalCourseIdPathParams)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdRequest.prototype, "pathParams", void 0);
    return DeleteCourseMappingsOfferingIdExternalCourseIdRequest;
}(SpeakeasyBase));
export { DeleteCourseMappingsOfferingIdExternalCourseIdRequest };
var DeleteCourseMappingsOfferingIdExternalCourseIdResponse = /** @class */ (function (_super) {
    __extends(DeleteCourseMappingsOfferingIdExternalCourseIdResponse, _super);
    function DeleteCourseMappingsOfferingIdExternalCourseIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdResponse.prototype, "deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCourseMappingsOfferingIdExternalCourseIdResponse.prototype, "statusCode", void 0);
    return DeleteCourseMappingsOfferingIdExternalCourseIdResponse;
}(SpeakeasyBase));
export { DeleteCourseMappingsOfferingIdExternalCourseIdResponse };
