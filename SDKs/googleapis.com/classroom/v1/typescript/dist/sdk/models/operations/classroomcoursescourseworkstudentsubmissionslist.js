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
var ClassroomCoursesCourseWorkStudentSubmissionsListPathParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListPathParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListPathParams.prototype, "courseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=courseWorkId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListPathParams.prototype, "courseWorkId", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListPathParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListPathParams };
export var ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;
(function (ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum) {
    ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum["LateValuesUnspecified"] = "LATE_VALUES_UNSPECIFIED";
    ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum["LateOnly"] = "LATE_ONLY";
    ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum["NotLateOnly"] = "NOT_LATE_ONLY";
})(ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum || (ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum = {}));
export var ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum;
(function (ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum) {
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["SubmissionStateUnspecified"] = "SUBMISSION_STATE_UNSPECIFIED";
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["New"] = "NEW";
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["Created"] = "CREATED";
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["TurnedIn"] = "TURNED_IN";
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["Returned"] = "RETURNED";
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum["ReclaimedByStudent"] = "RECLAIMED_BY_STUDENT";
})(ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum || (ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = {}));
var ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=late" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "late", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", Array)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "states", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams.prototype, "userId", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6.prototype, "oauth2c", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 };
var ClassroomCoursesCourseWorkStudentSubmissionsListSecurity = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListSecurity, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListSecurity.prototype, "option6", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListSecurity;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListSecurity };
var ClassroomCoursesCourseWorkStudentSubmissionsListRequest = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListRequest, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListPathParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClassroomCoursesCourseWorkStudentSubmissionsListSecurity)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListRequest.prototype, "security", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListRequest;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListRequest };
var ClassroomCoursesCourseWorkStudentSubmissionsListResponse = /** @class */ (function (_super) {
    __extends(ClassroomCoursesCourseWorkStudentSubmissionsListResponse, _super);
    function ClassroomCoursesCourseWorkStudentSubmissionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListStudentSubmissionsResponse)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListResponse.prototype, "listStudentSubmissionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClassroomCoursesCourseWorkStudentSubmissionsListResponse.prototype, "statusCode", void 0);
    return ClassroomCoursesCourseWorkStudentSubmissionsListResponse;
}(SpeakeasyBase));
export { ClassroomCoursesCourseWorkStudentSubmissionsListResponse };
