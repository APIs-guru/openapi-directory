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
var PutCoursesContentIdMetadataTagsPathParams = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTagsPathParams, _super);
    function PutCoursesContentIdMetadataTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" }),
        __metadata("design:type", String)
    ], PutCoursesContentIdMetadataTagsPathParams.prototype, "contentId", void 0);
    return PutCoursesContentIdMetadataTagsPathParams;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTagsPathParams };
var PutCoursesContentIdMetadataTagsRequestBody = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTagsRequestBody, _super);
    function PutCoursesContentIdMetadataTagsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PutCoursesContentIdMetadataTagsRequestBody.prototype, "tags", void 0);
    return PutCoursesContentIdMetadataTagsRequestBody;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTagsRequestBody };
var PutCoursesContentIdMetadataTagsRequest = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTagsRequest, _super);
    function PutCoursesContentIdMetadataTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCoursesContentIdMetadataTagsPathParams)
    ], PutCoursesContentIdMetadataTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutCoursesContentIdMetadataTagsRequestBody)
    ], PutCoursesContentIdMetadataTagsRequest.prototype, "request", void 0);
    return PutCoursesContentIdMetadataTagsRequest;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTagsRequest };
var PutCoursesContentIdMetadataTagsResponse = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTagsResponse, _super);
    function PutCoursesContentIdMetadataTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCoursesContentIdMetadataTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CourseMetaResponse)
    ], PutCoursesContentIdMetadataTagsResponse.prototype, "courseMetaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutCoursesContentIdMetadataTagsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCoursesContentIdMetadataTagsResponse.prototype, "statusCode", void 0);
    return PutCoursesContentIdMetadataTagsResponse;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTagsResponse };
