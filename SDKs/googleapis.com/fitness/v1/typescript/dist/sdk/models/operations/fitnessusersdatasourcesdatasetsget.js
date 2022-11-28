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
var FitnessUsersDataSourcesDatasetsGetPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetPathParams, _super);
    function FitnessUsersDataSourcesDatasetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetPathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetPathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesDatasetsGetPathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetPathParams };
var FitnessUsersDataSourcesDatasetsGetQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetQueryParams, _super);
    function FitnessUsersDataSourcesDatasetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesDatasetsGetQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetQueryParams };
var FitnessUsersDataSourcesDatasetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption1, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption1 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption2, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption2 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption3, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption3 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption4, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption4 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption5, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption5 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption6, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption6 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption7, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption7 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption8, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption8 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption9, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption9 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption10, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption10 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption11, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption11 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption12, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption12;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption12 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption13, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption13;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption13 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption14, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption14;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption14 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption15, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption15;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption15 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption16, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption16;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption16 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption17, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption17;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption17 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption18, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption18;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption18 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption19, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption19;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption19 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption20, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption20;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption20 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption21, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption21;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption21 };
var FitnessUsersDataSourcesDatasetsGetSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurityOption22, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsGetSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurityOption22;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurityOption22 };
var FitnessUsersDataSourcesDatasetsGetSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetSecurity, _super);
    function FitnessUsersDataSourcesDatasetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption1)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption2)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption3)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption4)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption5)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption6)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption7)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption8)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption9)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption10)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption11)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption12)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption13)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption14)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option14", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption15)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option15", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption16)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption17)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option17", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption18)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option18", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption19)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option19", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption20)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption21)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option21", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurityOption22)
    ], FitnessUsersDataSourcesDatasetsGetSecurity.prototype, "option22", void 0);
    return FitnessUsersDataSourcesDatasetsGetSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetSecurity };
var FitnessUsersDataSourcesDatasetsGetRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetRequest, _super);
    function FitnessUsersDataSourcesDatasetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetPathParams)
    ], FitnessUsersDataSourcesDatasetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetQueryParams)
    ], FitnessUsersDataSourcesDatasetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsGetSecurity)
    ], FitnessUsersDataSourcesDatasetsGetRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesDatasetsGetRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetRequest };
var FitnessUsersDataSourcesDatasetsGetResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsGetResponse, _super);
    function FitnessUsersDataSourcesDatasetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], FitnessUsersDataSourcesDatasetsGetResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDatasetsGetResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesDatasetsGetResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsGetResponse };
