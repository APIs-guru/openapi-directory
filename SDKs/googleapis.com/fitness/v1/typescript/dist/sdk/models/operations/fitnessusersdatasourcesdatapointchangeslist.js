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
var FitnessUsersDataSourcesDataPointChangesListPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListPathParams, _super);
    function FitnessUsersDataSourcesDataPointChangesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListPathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListPathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesDataPointChangesListPathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListPathParams };
var FitnessUsersDataSourcesDataPointChangesListQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListQueryParams, _super);
    function FitnessUsersDataSourcesDataPointChangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesDataPointChangesListQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListQueryParams };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption1, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption1 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption2, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption2 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption3, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption3 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption4, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption4 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption5, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption5 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption6, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption6 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption7, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption7 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption8, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption8 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption9, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption9 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption10, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption10 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption11, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption11 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption12, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption12;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption12 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption13, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption13;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption13 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption14, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption14;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption14 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption15, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption15;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption15 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption16, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption16;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption16 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption17, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption17;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption17 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption18, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption18;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption18 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption19, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption19;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption19 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption20, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption20;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption20 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption21, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption21;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption21 };
var FitnessUsersDataSourcesDataPointChangesListSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurityOption22, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDataPointChangesListSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurityOption22;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurityOption22 };
var FitnessUsersDataSourcesDataPointChangesListSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListSecurity, _super);
    function FitnessUsersDataSourcesDataPointChangesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption1)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption2)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption3)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption4)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption5)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption6)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption7)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption8)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption9)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption10)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption11)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption12)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption13)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption14)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option14", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption15)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option15", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption16)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption17)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option17", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption18)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option18", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption19)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option19", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption20)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption21)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option21", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurityOption22)
    ], FitnessUsersDataSourcesDataPointChangesListSecurity.prototype, "option22", void 0);
    return FitnessUsersDataSourcesDataPointChangesListSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListSecurity };
var FitnessUsersDataSourcesDataPointChangesListRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListRequest, _super);
    function FitnessUsersDataSourcesDataPointChangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListPathParams)
    ], FitnessUsersDataSourcesDataPointChangesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListQueryParams)
    ], FitnessUsersDataSourcesDataPointChangesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDataPointChangesListSecurity)
    ], FitnessUsersDataSourcesDataPointChangesListRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesDataPointChangesListRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListRequest };
var FitnessUsersDataSourcesDataPointChangesListResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDataPointChangesListResponse, _super);
    function FitnessUsersDataSourcesDataPointChangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDataPointChangesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDataPointChangesResponse)
    ], FitnessUsersDataSourcesDataPointChangesListResponse.prototype, "listDataPointChangesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDataPointChangesListResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesDataPointChangesListResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDataPointChangesListResponse };
