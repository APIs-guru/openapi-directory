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
var PostUserImageByIndexPathParams = /** @class */ (function (_super) {
    __extends(PostUserImageByIndexPathParams, _super);
    function PostUserImageByIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], PostUserImageByIndexPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", Number)
    ], PostUserImageByIndexPathParams.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostUserImageByIndexPathParams.prototype, "userId", void 0);
    return PostUserImageByIndexPathParams;
}(SpeakeasyBase));
export { PostUserImageByIndexPathParams };
var PostUserImageByIndexSecurity = /** @class */ (function (_super) {
    __extends(PostUserImageByIndexSecurity, _super);
    function PostUserImageByIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], PostUserImageByIndexSecurity.prototype, "customAuthentication", void 0);
    return PostUserImageByIndexSecurity;
}(SpeakeasyBase));
export { PostUserImageByIndexSecurity };
var PostUserImageByIndexRequest = /** @class */ (function (_super) {
    __extends(PostUserImageByIndexRequest, _super);
    function PostUserImageByIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUserImageByIndexPathParams)
    ], PostUserImageByIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUserImageByIndexSecurity)
    ], PostUserImageByIndexRequest.prototype, "security", void 0);
    return PostUserImageByIndexRequest;
}(SpeakeasyBase));
export { PostUserImageByIndexRequest };
var PostUserImageByIndexResponse = /** @class */ (function (_super) {
    __extends(PostUserImageByIndexResponse, _super);
    function PostUserImageByIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUserImageByIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostUserImageByIndexResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUserImageByIndexResponse.prototype, "statusCode", void 0);
    return PostUserImageByIndexResponse;
}(SpeakeasyBase));
export { PostUserImageByIndexResponse };
