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
var DoubleclicksearchReportsGetFilePathParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetFilePathParams, _super);
    function DoubleclicksearchReportsGetFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportFragment" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchReportsGetFilePathParams.prototype, "reportFragment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFilePathParams.prototype, "reportId", void 0);
    return DoubleclicksearchReportsGetFilePathParams;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetFilePathParams };
var DoubleclicksearchReportsGetFileQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetFileQueryParams, _super);
    function DoubleclicksearchReportsGetFileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclicksearchReportsGetFileQueryParams;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetFileQueryParams };
var DoubleclicksearchReportsGetFileSecurity = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetFileSecurity, _super);
    function DoubleclicksearchReportsGetFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclicksearchReportsGetFileSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclicksearchReportsGetFileSecurity.prototype, "oauth2c", void 0);
    return DoubleclicksearchReportsGetFileSecurity;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetFileSecurity };
var DoubleclicksearchReportsGetFileRequest = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetFileRequest, _super);
    function DoubleclicksearchReportsGetFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetFilePathParams)
    ], DoubleclicksearchReportsGetFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetFileQueryParams)
    ], DoubleclicksearchReportsGetFileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetFileSecurity)
    ], DoubleclicksearchReportsGetFileRequest.prototype, "security", void 0);
    return DoubleclicksearchReportsGetFileRequest;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetFileRequest };
var DoubleclicksearchReportsGetFileResponse = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetFileResponse, _super);
    function DoubleclicksearchReportsGetFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclicksearchReportsGetFileResponse.prototype, "statusCode", void 0);
    return DoubleclicksearchReportsGetFileResponse;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetFileResponse };
