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
var BigtableadminProjectsInstancesTablesUndeletePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeletePathParams, _super);
    function BigtableadminProjectsInstancesTablesUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeletePathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesUndeletePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeletePathParams };
var BigtableadminProjectsInstancesTablesUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteQueryParams, _super);
    function BigtableadminProjectsInstancesTablesUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteQueryParams };
var BigtableadminProjectsInstancesTablesUndeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurityOption1 };
var BigtableadminProjectsInstancesTablesUndeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurityOption2 };
var BigtableadminProjectsInstancesTablesUndeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurityOption3 };
var BigtableadminProjectsInstancesTablesUndeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurityOption4 };
var BigtableadminProjectsInstancesTablesUndeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurityOption5 };
var BigtableadminProjectsInstancesTablesUndeleteSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteSecurity, _super);
    function BigtableadminProjectsInstancesTablesUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurityOption1)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurityOption2)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurityOption3)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurityOption4)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurityOption5)
    ], BigtableadminProjectsInstancesTablesUndeleteSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteSecurity };
var BigtableadminProjectsInstancesTablesUndeleteRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteRequest, _super);
    function BigtableadminProjectsInstancesTablesUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeletePathParams)
    ], BigtableadminProjectsInstancesTablesUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteQueryParams)
    ], BigtableadminProjectsInstancesTablesUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BigtableadminProjectsInstancesTablesUndeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesUndeleteSecurity)
    ], BigtableadminProjectsInstancesTablesUndeleteRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteRequest };
var BigtableadminProjectsInstancesTablesUndeleteResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesUndeleteResponse, _super);
    function BigtableadminProjectsInstancesTablesUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesTablesUndeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesUndeleteResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesUndeleteResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesUndeleteResponse };
