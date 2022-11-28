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
var BigtableadminProjectsInstancesTablesPatchPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchPathParams, _super);
    function BigtableadminProjectsInstancesTablesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchPathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesPatchPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchPathParams };
var BigtableadminProjectsInstancesTablesPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchQueryParams, _super);
    function BigtableadminProjectsInstancesTablesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesPatchQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchQueryParams };
var BigtableadminProjectsInstancesTablesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption1 };
var BigtableadminProjectsInstancesTablesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption2 };
var BigtableadminProjectsInstancesTablesPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption3 };
var BigtableadminProjectsInstancesTablesPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption4 };
var BigtableadminProjectsInstancesTablesPatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption5 };
var BigtableadminProjectsInstancesTablesPatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesPatchSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurityOption6 };
var BigtableadminProjectsInstancesTablesPatchSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchSecurity, _super);
    function BigtableadminProjectsInstancesTablesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption1)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption2)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption3)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption4)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption5)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurityOption6)
    ], BigtableadminProjectsInstancesTablesPatchSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesPatchSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchSecurity };
var BigtableadminProjectsInstancesTablesPatchRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchRequest, _super);
    function BigtableadminProjectsInstancesTablesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchPathParams)
    ], BigtableadminProjectsInstancesTablesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchQueryParams)
    ], BigtableadminProjectsInstancesTablesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TableInput)
    ], BigtableadminProjectsInstancesTablesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesPatchSecurity)
    ], BigtableadminProjectsInstancesTablesPatchRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesPatchRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchRequest };
var BigtableadminProjectsInstancesTablesPatchResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesPatchResponse, _super);
    function BigtableadminProjectsInstancesTablesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesTablesPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesPatchResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesPatchResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesPatchResponse };
