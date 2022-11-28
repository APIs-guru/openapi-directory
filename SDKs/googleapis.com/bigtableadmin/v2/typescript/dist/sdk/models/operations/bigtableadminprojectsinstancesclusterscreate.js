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
var BigtableadminProjectsInstancesClustersCreatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreatePathParams, _super);
    function BigtableadminProjectsInstancesClustersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreatePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersCreatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreatePathParams };
var BigtableadminProjectsInstancesClustersCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateQueryParams, _super);
    function BigtableadminProjectsInstancesClustersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clusterId" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersCreateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateQueryParams };
var BigtableadminProjectsInstancesClustersCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption1 };
var BigtableadminProjectsInstancesClustersCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption2 };
var BigtableadminProjectsInstancesClustersCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption3 };
var BigtableadminProjectsInstancesClustersCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption4 };
var BigtableadminProjectsInstancesClustersCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption5 };
var BigtableadminProjectsInstancesClustersCreateSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurityOption6, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersCreateSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurityOption6 };
var BigtableadminProjectsInstancesClustersCreateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateSecurity, _super);
    function BigtableadminProjectsInstancesClustersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption1)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption2)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption3)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption4)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption5)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurityOption6)
    ], BigtableadminProjectsInstancesClustersCreateSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesClustersCreateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateSecurity };
var BigtableadminProjectsInstancesClustersCreateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateRequest, _super);
    function BigtableadminProjectsInstancesClustersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreatePathParams)
    ], BigtableadminProjectsInstancesClustersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateQueryParams)
    ], BigtableadminProjectsInstancesClustersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClusterInput)
    ], BigtableadminProjectsInstancesClustersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersCreateSecurity)
    ], BigtableadminProjectsInstancesClustersCreateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersCreateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateRequest };
var BigtableadminProjectsInstancesClustersCreateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersCreateResponse, _super);
    function BigtableadminProjectsInstancesClustersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesClustersCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersCreateResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersCreateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersCreateResponse };
