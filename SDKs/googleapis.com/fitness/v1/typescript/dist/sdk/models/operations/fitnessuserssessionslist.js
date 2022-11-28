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
var FitnessUsersSessionsListPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListPathParams, _super);
    function FitnessUsersSessionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListPathParams.prototype, "userId", void 0);
    return FitnessUsersSessionsListPathParams;
}(SpeakeasyBase));
export { FitnessUsersSessionsListPathParams };
var FitnessUsersSessionsListQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListQueryParams, _super);
    function FitnessUsersSessionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activityType" }),
        __metadata("design:type", Array)
    ], FitnessUsersSessionsListQueryParams.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersSessionsListQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersSessionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersSessionsListQueryParams;
}(SpeakeasyBase));
export { FitnessUsersSessionsListQueryParams };
var FitnessUsersSessionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption1, _super);
    function FitnessUsersSessionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption1 };
var FitnessUsersSessionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption2, _super);
    function FitnessUsersSessionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption2 };
var FitnessUsersSessionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption3, _super);
    function FitnessUsersSessionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption3 };
var FitnessUsersSessionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption4, _super);
    function FitnessUsersSessionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption4 };
var FitnessUsersSessionsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption5, _super);
    function FitnessUsersSessionsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption5 };
var FitnessUsersSessionsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption6, _super);
    function FitnessUsersSessionsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption6 };
var FitnessUsersSessionsListSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption7, _super);
    function FitnessUsersSessionsListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption7 };
var FitnessUsersSessionsListSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption8, _super);
    function FitnessUsersSessionsListSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption8 };
var FitnessUsersSessionsListSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption9, _super);
    function FitnessUsersSessionsListSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption9 };
var FitnessUsersSessionsListSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption10, _super);
    function FitnessUsersSessionsListSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption10 };
var FitnessUsersSessionsListSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption11, _super);
    function FitnessUsersSessionsListSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption11 };
var FitnessUsersSessionsListSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption12, _super);
    function FitnessUsersSessionsListSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption12;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption12 };
var FitnessUsersSessionsListSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption13, _super);
    function FitnessUsersSessionsListSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption13;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption13 };
var FitnessUsersSessionsListSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption14, _super);
    function FitnessUsersSessionsListSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption14;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption14 };
var FitnessUsersSessionsListSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption15, _super);
    function FitnessUsersSessionsListSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption15;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption15 };
var FitnessUsersSessionsListSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption16, _super);
    function FitnessUsersSessionsListSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption16;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption16 };
var FitnessUsersSessionsListSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption17, _super);
    function FitnessUsersSessionsListSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption17;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption17 };
var FitnessUsersSessionsListSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption18, _super);
    function FitnessUsersSessionsListSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption18;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption18 };
var FitnessUsersSessionsListSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption19, _super);
    function FitnessUsersSessionsListSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption19;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption19 };
var FitnessUsersSessionsListSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption20, _super);
    function FitnessUsersSessionsListSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption20;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption20 };
var FitnessUsersSessionsListSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption21, _super);
    function FitnessUsersSessionsListSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption21;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption21 };
var FitnessUsersSessionsListSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurityOption22, _super);
    function FitnessUsersSessionsListSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsListSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsListSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsListSecurityOption22;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurityOption22 };
var FitnessUsersSessionsListSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListSecurity, _super);
    function FitnessUsersSessionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption1)
    ], FitnessUsersSessionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption2)
    ], FitnessUsersSessionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption3)
    ], FitnessUsersSessionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption4)
    ], FitnessUsersSessionsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption5)
    ], FitnessUsersSessionsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption6)
    ], FitnessUsersSessionsListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption7)
    ], FitnessUsersSessionsListSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption8)
    ], FitnessUsersSessionsListSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption9)
    ], FitnessUsersSessionsListSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption10)
    ], FitnessUsersSessionsListSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption11)
    ], FitnessUsersSessionsListSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption12)
    ], FitnessUsersSessionsListSecurity.prototype, "option12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption13)
    ], FitnessUsersSessionsListSecurity.prototype, "option13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption14)
    ], FitnessUsersSessionsListSecurity.prototype, "option14", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption15)
    ], FitnessUsersSessionsListSecurity.prototype, "option15", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption16)
    ], FitnessUsersSessionsListSecurity.prototype, "option16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption17)
    ], FitnessUsersSessionsListSecurity.prototype, "option17", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption18)
    ], FitnessUsersSessionsListSecurity.prototype, "option18", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption19)
    ], FitnessUsersSessionsListSecurity.prototype, "option19", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption20)
    ], FitnessUsersSessionsListSecurity.prototype, "option20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption21)
    ], FitnessUsersSessionsListSecurity.prototype, "option21", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsListSecurityOption22)
    ], FitnessUsersSessionsListSecurity.prototype, "option22", void 0);
    return FitnessUsersSessionsListSecurity;
}(SpeakeasyBase));
export { FitnessUsersSessionsListSecurity };
var FitnessUsersSessionsListRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListRequest, _super);
    function FitnessUsersSessionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsListPathParams)
    ], FitnessUsersSessionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsListQueryParams)
    ], FitnessUsersSessionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsListSecurity)
    ], FitnessUsersSessionsListRequest.prototype, "security", void 0);
    return FitnessUsersSessionsListRequest;
}(SpeakeasyBase));
export { FitnessUsersSessionsListRequest };
var FitnessUsersSessionsListResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsListResponse, _super);
    function FitnessUsersSessionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersSessionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSessionsResponse)
    ], FitnessUsersSessionsListResponse.prototype, "listSessionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersSessionsListResponse.prototype, "statusCode", void 0);
    return FitnessUsersSessionsListResponse;
}(SpeakeasyBase));
export { FitnessUsersSessionsListResponse };
