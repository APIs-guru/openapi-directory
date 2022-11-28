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
var PostRequestIdCmdEqualDiffPathParams = /** @class */ (function (_super) {
    __extends(PostRequestIdCmdEqualDiffPathParams, _super);
    function PostRequestIdCmdEqualDiffPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostRequestIdCmdEqualDiffPathParams.prototype, "id", void 0);
    return PostRequestIdCmdEqualDiffPathParams;
}(SpeakeasyBase));
export { PostRequestIdCmdEqualDiffPathParams };
export var PostRequestIdCmdEqualDiffViewEnum;
(function (PostRequestIdCmdEqualDiffViewEnum) {
    PostRequestIdCmdEqualDiffViewEnum["Xml"] = "xml";
})(PostRequestIdCmdEqualDiffViewEnum || (PostRequestIdCmdEqualDiffViewEnum = {}));
export var PostRequestIdCmdEqualDiffWithissuesEnum;
(function (PostRequestIdCmdEqualDiffWithissuesEnum) {
    PostRequestIdCmdEqualDiffWithissuesEnum["True"] = "true";
    PostRequestIdCmdEqualDiffWithissuesEnum["One"] = "1";
})(PostRequestIdCmdEqualDiffWithissuesEnum || (PostRequestIdCmdEqualDiffWithissuesEnum = {}));
var PostRequestIdCmdEqualDiffQueryParams = /** @class */ (function (_super) {
    __extends(PostRequestIdCmdEqualDiffQueryParams, _super);
    function PostRequestIdCmdEqualDiffQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=diff_to_superseded" }),
        __metadata("design:type", String)
    ], PostRequestIdCmdEqualDiffQueryParams.prototype, "diffToSuperseded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], PostRequestIdCmdEqualDiffQueryParams.prototype, "view", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withissues" }),
        __metadata("design:type", String)
    ], PostRequestIdCmdEqualDiffQueryParams.prototype, "withissues", void 0);
    return PostRequestIdCmdEqualDiffQueryParams;
}(SpeakeasyBase));
export { PostRequestIdCmdEqualDiffQueryParams };
var PostRequestIdCmdEqualDiffSecurity = /** @class */ (function (_super) {
    __extends(PostRequestIdCmdEqualDiffSecurity, _super);
    function PostRequestIdCmdEqualDiffSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostRequestIdCmdEqualDiffSecurity.prototype, "basicAuthentication", void 0);
    return PostRequestIdCmdEqualDiffSecurity;
}(SpeakeasyBase));
export { PostRequestIdCmdEqualDiffSecurity };
var PostRequestIdCmdEqualDiffRequest = /** @class */ (function (_super) {
    __extends(PostRequestIdCmdEqualDiffRequest, _super);
    function PostRequestIdCmdEqualDiffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRequestIdCmdEqualDiffPathParams)
    ], PostRequestIdCmdEqualDiffRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRequestIdCmdEqualDiffQueryParams)
    ], PostRequestIdCmdEqualDiffRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRequestIdCmdEqualDiffSecurity)
    ], PostRequestIdCmdEqualDiffRequest.prototype, "security", void 0);
    return PostRequestIdCmdEqualDiffRequest;
}(SpeakeasyBase));
export { PostRequestIdCmdEqualDiffRequest };
var PostRequestIdCmdEqualDiffResponse = /** @class */ (function (_super) {
    __extends(PostRequestIdCmdEqualDiffResponse, _super);
    function PostRequestIdCmdEqualDiffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRequestIdCmdEqualDiffResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRequestIdCmdEqualDiffResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRequestIdCmdEqualDiffResponse.prototype, "postRequestIdCmdEqualDiff200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRequestIdCmdEqualDiffResponse.prototype, "statusCode", void 0);
    return PostRequestIdCmdEqualDiffResponse;
}(SpeakeasyBase));
export { PostRequestIdCmdEqualDiffResponse };
