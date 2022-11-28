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
var ReadmeGetV2SourcesReadmeSlugGetPathParams = /** @class */ (function (_super) {
    __extends(ReadmeGetV2SourcesReadmeSlugGetPathParams, _super);
    function ReadmeGetV2SourcesReadmeSlugGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], ReadmeGetV2SourcesReadmeSlugGetPathParams.prototype, "slug", void 0);
    return ReadmeGetV2SourcesReadmeSlugGetPathParams;
}(SpeakeasyBase));
export { ReadmeGetV2SourcesReadmeSlugGetPathParams };
var ReadmeGetV2SourcesReadmeSlugGetRequest = /** @class */ (function (_super) {
    __extends(ReadmeGetV2SourcesReadmeSlugGetRequest, _super);
    function ReadmeGetV2SourcesReadmeSlugGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReadmeGetV2SourcesReadmeSlugGetPathParams)
    ], ReadmeGetV2SourcesReadmeSlugGetRequest.prototype, "pathParams", void 0);
    return ReadmeGetV2SourcesReadmeSlugGetRequest;
}(SpeakeasyBase));
export { ReadmeGetV2SourcesReadmeSlugGetRequest };
var ReadmeGetV2SourcesReadmeSlugGetResponse = /** @class */ (function (_super) {
    __extends(ReadmeGetV2SourcesReadmeSlugGetResponse, _super);
    function ReadmeGetV2SourcesReadmeSlugGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReadmeGetV2SourcesReadmeSlugGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], ReadmeGetV2SourcesReadmeSlugGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReadmeGetV2SourcesReadmeSlugGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReadmeGetV2SourcesReadmeSlugGetResponse.prototype, "readmeGetV2SourcesReadmeSlugGet200ApplicationJsonAny", void 0);
    return ReadmeGetV2SourcesReadmeSlugGetResponse;
}(SpeakeasyBase));
export { ReadmeGetV2SourcesReadmeSlugGetResponse };
