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
var FitnessUsersDataSourcesDeletePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeletePathParams, _super);
    function FitnessUsersDataSourcesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeletePathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeletePathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesDeletePathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeletePathParams };
var FitnessUsersDataSourcesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteQueryParams, _super);
    function FitnessUsersDataSourcesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesDeleteQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteQueryParams };
var FitnessUsersDataSourcesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption1, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption1 };
var FitnessUsersDataSourcesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption2, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption2 };
var FitnessUsersDataSourcesDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption3, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption3 };
var FitnessUsersDataSourcesDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption4, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption4 };
var FitnessUsersDataSourcesDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption5, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption5 };
var FitnessUsersDataSourcesDeleteSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption6, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption6 };
var FitnessUsersDataSourcesDeleteSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption7, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption7 };
var FitnessUsersDataSourcesDeleteSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption8, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption8 };
var FitnessUsersDataSourcesDeleteSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption9, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption9 };
var FitnessUsersDataSourcesDeleteSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption10, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption10 };
var FitnessUsersDataSourcesDeleteSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurityOption11, _super);
    function FitnessUsersDataSourcesDeleteSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDeleteSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDeleteSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDeleteSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurityOption11 };
var FitnessUsersDataSourcesDeleteSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteSecurity, _super);
    function FitnessUsersDataSourcesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption1)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption2)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption3)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption4)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption5)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption6)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption7)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption8)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption9)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption10)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurityOption11)
    ], FitnessUsersDataSourcesDeleteSecurity.prototype, "option11", void 0);
    return FitnessUsersDataSourcesDeleteSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteSecurity };
var FitnessUsersDataSourcesDeleteRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteRequest, _super);
    function FitnessUsersDataSourcesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDeletePathParams)
    ], FitnessUsersDataSourcesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDeleteQueryParams)
    ], FitnessUsersDataSourcesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDeleteSecurity)
    ], FitnessUsersDataSourcesDeleteRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesDeleteRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteRequest };
var FitnessUsersDataSourcesDeleteResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDeleteResponse, _super);
    function FitnessUsersDataSourcesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesDeleteResponse.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDeleteResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesDeleteResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDeleteResponse };
