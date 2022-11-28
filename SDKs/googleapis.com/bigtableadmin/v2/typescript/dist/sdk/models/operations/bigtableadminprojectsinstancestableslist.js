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
var BigtableadminProjectsInstancesTablesListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListPathParams, _super);
    function BigtableadminProjectsInstancesTablesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesTablesListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListPathParams };
export var BigtableadminProjectsInstancesTablesListViewEnum;
(function (BigtableadminProjectsInstancesTablesListViewEnum) {
    BigtableadminProjectsInstancesTablesListViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    BigtableadminProjectsInstancesTablesListViewEnum["NameOnly"] = "NAME_ONLY";
    BigtableadminProjectsInstancesTablesListViewEnum["SchemaView"] = "SCHEMA_VIEW";
    BigtableadminProjectsInstancesTablesListViewEnum["ReplicationView"] = "REPLICATION_VIEW";
    BigtableadminProjectsInstancesTablesListViewEnum["EncryptionView"] = "ENCRYPTION_VIEW";
    BigtableadminProjectsInstancesTablesListViewEnum["StatsView"] = "STATS_VIEW";
    BigtableadminProjectsInstancesTablesListViewEnum["Full"] = "FULL";
})(BigtableadminProjectsInstancesTablesListViewEnum || (BigtableadminProjectsInstancesTablesListViewEnum = {}));
var BigtableadminProjectsInstancesTablesListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListQueryParams, _super);
    function BigtableadminProjectsInstancesTablesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListQueryParams.prototype, "view", void 0);
    return BigtableadminProjectsInstancesTablesListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListQueryParams };
var BigtableadminProjectsInstancesTablesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption1 };
var BigtableadminProjectsInstancesTablesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption2 };
var BigtableadminProjectsInstancesTablesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption3 };
var BigtableadminProjectsInstancesTablesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption4 };
var BigtableadminProjectsInstancesTablesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption5 };
var BigtableadminProjectsInstancesTablesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurityOption6 };
var BigtableadminProjectsInstancesTablesListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListSecurity, _super);
    function BigtableadminProjectsInstancesTablesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption1)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption2)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption3)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption4)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption5)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurityOption6)
    ], BigtableadminProjectsInstancesTablesListSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListSecurity };
var BigtableadminProjectsInstancesTablesListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListRequest, _super);
    function BigtableadminProjectsInstancesTablesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListPathParams)
    ], BigtableadminProjectsInstancesTablesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListQueryParams)
    ], BigtableadminProjectsInstancesTablesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesListSecurity)
    ], BigtableadminProjectsInstancesTablesListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListRequest };
var BigtableadminProjectsInstancesTablesListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesListResponse, _super);
    function BigtableadminProjectsInstancesTablesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTablesResponse)
    ], BigtableadminProjectsInstancesTablesListResponse.prototype, "listTablesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesListResponse };
