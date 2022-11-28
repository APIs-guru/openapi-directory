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
export var StreetviewpublishPhotoSequenceCreateInputTypeEnum;
(function (StreetviewpublishPhotoSequenceCreateInputTypeEnum) {
    StreetviewpublishPhotoSequenceCreateInputTypeEnum["InputTypeUnspecified"] = "INPUT_TYPE_UNSPECIFIED";
    StreetviewpublishPhotoSequenceCreateInputTypeEnum["Video"] = "VIDEO";
    StreetviewpublishPhotoSequenceCreateInputTypeEnum["Xdm"] = "XDM";
})(StreetviewpublishPhotoSequenceCreateInputTypeEnum || (StreetviewpublishPhotoSequenceCreateInputTypeEnum = {}));
var StreetviewpublishPhotoSequenceCreateQueryParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceCreateQueryParams, _super);
    function StreetviewpublishPhotoSequenceCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inputType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "inputType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateQueryParams.prototype, "uploadProtocol", void 0);
    return StreetviewpublishPhotoSequenceCreateQueryParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceCreateQueryParams };
var StreetviewpublishPhotoSequenceCreateSecurity = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceCreateSecurity, _super);
    function StreetviewpublishPhotoSequenceCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StreetviewpublishPhotoSequenceCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StreetviewpublishPhotoSequenceCreateSecurity.prototype, "oauth2c", void 0);
    return StreetviewpublishPhotoSequenceCreateSecurity;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceCreateSecurity };
var StreetviewpublishPhotoSequenceCreateRequest = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceCreateRequest, _super);
    function StreetviewpublishPhotoSequenceCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoSequenceCreateQueryParams)
    ], StreetviewpublishPhotoSequenceCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PhotoSequenceInput)
    ], StreetviewpublishPhotoSequenceCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoSequenceCreateSecurity)
    ], StreetviewpublishPhotoSequenceCreateRequest.prototype, "security", void 0);
    return StreetviewpublishPhotoSequenceCreateRequest;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceCreateRequest };
var StreetviewpublishPhotoSequenceCreateResponse = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceCreateResponse, _super);
    function StreetviewpublishPhotoSequenceCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], StreetviewpublishPhotoSequenceCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetviewpublishPhotoSequenceCreateResponse.prototype, "statusCode", void 0);
    return StreetviewpublishPhotoSequenceCreateResponse;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceCreateResponse };
