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
var BigtableadminProjectsInstancesClustersHotTabletsListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListPathParams, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListPathParams };
var BigtableadminProjectsInstancesClustersHotTabletsListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListQueryParams, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListQueryParams };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6 };
var BigtableadminProjectsInstancesClustersHotTabletsListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListSecurity, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6)
    ], BigtableadminProjectsInstancesClustersHotTabletsListSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListSecurity };
var BigtableadminProjectsInstancesClustersHotTabletsListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListRequest, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListPathParams)
    ], BigtableadminProjectsInstancesClustersHotTabletsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListQueryParams)
    ], BigtableadminProjectsInstancesClustersHotTabletsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersHotTabletsListSecurity)
    ], BigtableadminProjectsInstancesClustersHotTabletsListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListRequest };
var BigtableadminProjectsInstancesClustersHotTabletsListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersHotTabletsListResponse, _super);
    function BigtableadminProjectsInstancesClustersHotTabletsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersHotTabletsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHotTabletsResponse)
    ], BigtableadminProjectsInstancesClustersHotTabletsListResponse.prototype, "listHotTabletsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersHotTabletsListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersHotTabletsListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersHotTabletsListResponse };
