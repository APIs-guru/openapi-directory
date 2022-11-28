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
var FitnessUsersDataSourcesUpdatePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdatePathParams, _super);
    function FitnessUsersDataSourcesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdatePathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdatePathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesUpdatePathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdatePathParams };
var FitnessUsersDataSourcesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateQueryParams, _super);
    function FitnessUsersDataSourcesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesUpdateQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateQueryParams };
var FitnessUsersDataSourcesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption1, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption1 };
var FitnessUsersDataSourcesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption2, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption2 };
var FitnessUsersDataSourcesUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption3, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption3 };
var FitnessUsersDataSourcesUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption4, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption4 };
var FitnessUsersDataSourcesUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption5, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption5 };
var FitnessUsersDataSourcesUpdateSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption6, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption6 };
var FitnessUsersDataSourcesUpdateSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption7, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption7 };
var FitnessUsersDataSourcesUpdateSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption8, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption8 };
var FitnessUsersDataSourcesUpdateSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption9, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption9 };
var FitnessUsersDataSourcesUpdateSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption10, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption10 };
var FitnessUsersDataSourcesUpdateSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurityOption11, _super);
    function FitnessUsersDataSourcesUpdateSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesUpdateSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesUpdateSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesUpdateSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurityOption11 };
var FitnessUsersDataSourcesUpdateSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateSecurity, _super);
    function FitnessUsersDataSourcesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption1)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption2)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption3)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption4)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption5)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption6)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption7)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption8)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption9)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption10)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurityOption11)
    ], FitnessUsersDataSourcesUpdateSecurity.prototype, "option11", void 0);
    return FitnessUsersDataSourcesUpdateSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateSecurity };
var FitnessUsersDataSourcesUpdateRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateRequest, _super);
    function FitnessUsersDataSourcesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesUpdatePathParams)
    ], FitnessUsersDataSourcesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesUpdateQueryParams)
    ], FitnessUsersDataSourcesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesUpdateSecurity)
    ], FitnessUsersDataSourcesUpdateRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesUpdateRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateRequest };
var FitnessUsersDataSourcesUpdateResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesUpdateResponse, _super);
    function FitnessUsersDataSourcesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesUpdateResponse.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesUpdateResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesUpdateResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesUpdateResponse };
