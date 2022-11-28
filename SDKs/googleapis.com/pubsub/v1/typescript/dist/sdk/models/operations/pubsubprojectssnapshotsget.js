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
var PubsubProjectsSnapshotsGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetPathParams, _super);
    function PubsubProjectsSnapshotsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshot" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetPathParams.prototype, "snapshot", void 0);
    return PubsubProjectsSnapshotsGetPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetPathParams };
var PubsubProjectsSnapshotsGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetQueryParams, _super);
    function PubsubProjectsSnapshotsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSnapshotsGetQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetQueryParams };
var PubsubProjectsSnapshotsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetSecurityOption1, _super);
    function PubsubProjectsSnapshotsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetSecurityOption1 };
var PubsubProjectsSnapshotsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetSecurityOption2, _super);
    function PubsubProjectsSnapshotsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetSecurityOption2 };
var PubsubProjectsSnapshotsGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetSecurity, _super);
    function PubsubProjectsSnapshotsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsGetSecurityOption1)
    ], PubsubProjectsSnapshotsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsGetSecurityOption2)
    ], PubsubProjectsSnapshotsGetSecurity.prototype, "option2", void 0);
    return PubsubProjectsSnapshotsGetSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetSecurity };
var PubsubProjectsSnapshotsGetRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetRequest, _super);
    function PubsubProjectsSnapshotsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsGetPathParams)
    ], PubsubProjectsSnapshotsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsGetQueryParams)
    ], PubsubProjectsSnapshotsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsGetSecurity)
    ], PubsubProjectsSnapshotsGetRequest.prototype, "security", void 0);
    return PubsubProjectsSnapshotsGetRequest;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetRequest };
var PubsubProjectsSnapshotsGetResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsGetResponse, _super);
    function PubsubProjectsSnapshotsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], PubsubProjectsSnapshotsGetResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSnapshotsGetResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSnapshotsGetResponse;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsGetResponse };
