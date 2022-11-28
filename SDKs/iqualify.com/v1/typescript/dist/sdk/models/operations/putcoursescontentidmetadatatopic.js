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
var PutCoursesContentIdMetadataTopicPathParams = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTopicPathParams, _super);
    function PutCoursesContentIdMetadataTopicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" }),
        __metadata("design:type", String)
    ], PutCoursesContentIdMetadataTopicPathParams.prototype, "contentId", void 0);
    return PutCoursesContentIdMetadataTopicPathParams;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTopicPathParams };
var PutCoursesContentIdMetadataTopicRequestBody = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTopicRequestBody, _super);
    function PutCoursesContentIdMetadataTopicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], PutCoursesContentIdMetadataTopicRequestBody.prototype, "topic", void 0);
    return PutCoursesContentIdMetadataTopicRequestBody;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTopicRequestBody };
var PutCoursesContentIdMetadataTopicRequest = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTopicRequest, _super);
    function PutCoursesContentIdMetadataTopicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCoursesContentIdMetadataTopicPathParams)
    ], PutCoursesContentIdMetadataTopicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutCoursesContentIdMetadataTopicRequestBody)
    ], PutCoursesContentIdMetadataTopicRequest.prototype, "request", void 0);
    return PutCoursesContentIdMetadataTopicRequest;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTopicRequest };
var PutCoursesContentIdMetadataTopicResponse = /** @class */ (function (_super) {
    __extends(PutCoursesContentIdMetadataTopicResponse, _super);
    function PutCoursesContentIdMetadataTopicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCoursesContentIdMetadataTopicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CourseMetaResponse)
    ], PutCoursesContentIdMetadataTopicResponse.prototype, "courseMetaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutCoursesContentIdMetadataTopicResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCoursesContentIdMetadataTopicResponse.prototype, "statusCode", void 0);
    return PutCoursesContentIdMetadataTopicResponse;
}(SpeakeasyBase));
export { PutCoursesContentIdMetadataTopicResponse };
