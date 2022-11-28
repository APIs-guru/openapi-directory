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
export var CreateObjectStorageBucketServerList = [
    "https://api.linode.com/v4",
];
export var CreateObjectStorageBucketRequestBodyAclEnum;
(function (CreateObjectStorageBucketRequestBodyAclEnum) {
    CreateObjectStorageBucketRequestBodyAclEnum["Private"] = "private";
    CreateObjectStorageBucketRequestBodyAclEnum["PublicRead"] = "public-read";
    CreateObjectStorageBucketRequestBodyAclEnum["AuthenticatedRead"] = "authenticated-read";
    CreateObjectStorageBucketRequestBodyAclEnum["PublicReadWrite"] = "public-read-write";
})(CreateObjectStorageBucketRequestBodyAclEnum || (CreateObjectStorageBucketRequestBodyAclEnum = {}));
var CreateObjectStorageBucketRequestBody = /** @class */ (function (_super) {
    __extends(CreateObjectStorageBucketRequestBody, _super);
    function CreateObjectStorageBucketRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", String)
    ], CreateObjectStorageBucketRequestBody.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], CreateObjectStorageBucketRequestBody.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cors_enabled" }),
        __metadata("design:type", Boolean)
    ], CreateObjectStorageBucketRequestBody.prototype, "corsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateObjectStorageBucketRequestBody.prototype, "label", void 0);
    return CreateObjectStorageBucketRequestBody;
}(SpeakeasyBase));
export { CreateObjectStorageBucketRequestBody };
var CreateObjectStorageBucketSecurity = /** @class */ (function (_super) {
    __extends(CreateObjectStorageBucketSecurity, _super);
    function CreateObjectStorageBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateObjectStorageBucketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateObjectStorageBucketSecurity.prototype, "oauth", void 0);
    return CreateObjectStorageBucketSecurity;
}(SpeakeasyBase));
export { CreateObjectStorageBucketSecurity };
var CreateObjectStorageBucketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateObjectStorageBucketDefaultApplicationJson, _super);
    function CreateObjectStorageBucketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateObjectStorageBucketDefaultApplicationJson.prototype, "errors", void 0);
    return CreateObjectStorageBucketDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateObjectStorageBucketDefaultApplicationJson };
var CreateObjectStorageBucketRequest = /** @class */ (function (_super) {
    __extends(CreateObjectStorageBucketRequest, _super);
    function CreateObjectStorageBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateObjectStorageBucketRequestBody)
    ], CreateObjectStorageBucketRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageBucketSecurity)
    ], CreateObjectStorageBucketRequest.prototype, "security", void 0);
    return CreateObjectStorageBucketRequest;
}(SpeakeasyBase));
export { CreateObjectStorageBucketRequest };
var CreateObjectStorageBucketResponse = /** @class */ (function (_super) {
    __extends(CreateObjectStorageBucketResponse, _super);
    function CreateObjectStorageBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageBucketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageBucket)
    ], CreateObjectStorageBucketResponse.prototype, "objectStorageBucket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateObjectStorageBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageBucketDefaultApplicationJson)
    ], CreateObjectStorageBucketResponse.prototype, "createObjectStorageBucketDefaultApplicationJsonObject", void 0);
    return CreateObjectStorageBucketResponse;
}(SpeakeasyBase));
export { CreateObjectStorageBucketResponse };
