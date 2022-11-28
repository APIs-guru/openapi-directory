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
var DoubleclicksearchReportsGetPathParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetPathParams, _super);
    function DoubleclicksearchReportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetPathParams.prototype, "reportId", void 0);
    return DoubleclicksearchReportsGetPathParams;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetPathParams };
var DoubleclicksearchReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetQueryParams, _super);
    function DoubleclicksearchReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclicksearchReportsGetQueryParams;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetQueryParams };
var DoubleclicksearchReportsGetSecurity = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetSecurity, _super);
    function DoubleclicksearchReportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclicksearchReportsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclicksearchReportsGetSecurity.prototype, "oauth2c", void 0);
    return DoubleclicksearchReportsGetSecurity;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetSecurity };
var DoubleclicksearchReportsGetRequest = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetRequest, _super);
    function DoubleclicksearchReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetPathParams)
    ], DoubleclicksearchReportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetQueryParams)
    ], DoubleclicksearchReportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchReportsGetSecurity)
    ], DoubleclicksearchReportsGetRequest.prototype, "security", void 0);
    return DoubleclicksearchReportsGetRequest;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetRequest };
var DoubleclicksearchReportsGetResponse = /** @class */ (function (_super) {
    __extends(DoubleclicksearchReportsGetResponse, _super);
    function DoubleclicksearchReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclicksearchReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Report)
    ], DoubleclicksearchReportsGetResponse.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclicksearchReportsGetResponse.prototype, "statusCode", void 0);
    return DoubleclicksearchReportsGetResponse;
}(SpeakeasyBase));
export { DoubleclicksearchReportsGetResponse };
