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
var CreateUserInGroupQueryParams = /** @class */ (function (_super) {
    __extends(CreateUserInGroupQueryParams, _super);
    function CreateUserInGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activate" }),
        __metadata("design:type", String)
    ], CreateUserInGroupQueryParams.prototype, "activate", void 0);
    return CreateUserInGroupQueryParams;
}(SpeakeasyBase));
export { CreateUserInGroupQueryParams };
var CreateUserInGroupRequestBodyProfile = /** @class */ (function (_super) {
    __extends(CreateUserInGroupRequestBodyProfile, _super);
    function CreateUserInGroupRequestBodyProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateUserInGroupRequestBodyProfile.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], CreateUserInGroupRequestBodyProfile.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], CreateUserInGroupRequestBodyProfile.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], CreateUserInGroupRequestBodyProfile.prototype, "login", void 0);
    return CreateUserInGroupRequestBodyProfile;
}(SpeakeasyBase));
export { CreateUserInGroupRequestBodyProfile };
var CreateUserInGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateUserInGroupRequestBody, _super);
    function CreateUserInGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupIds" }),
        __metadata("design:type", Array)
    ], CreateUserInGroupRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", CreateUserInGroupRequestBodyProfile)
    ], CreateUserInGroupRequestBody.prototype, "profile", void 0);
    return CreateUserInGroupRequestBody;
}(SpeakeasyBase));
export { CreateUserInGroupRequestBody };
var CreateUserInGroupRequest = /** @class */ (function (_super) {
    __extends(CreateUserInGroupRequest, _super);
    function CreateUserInGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUserInGroupQueryParams)
    ], CreateUserInGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateUserInGroupRequestBody)
    ], CreateUserInGroupRequest.prototype, "request", void 0);
    return CreateUserInGroupRequest;
}(SpeakeasyBase));
export { CreateUserInGroupRequest };
var CreateUserInGroupResponse = /** @class */ (function (_super) {
    __extends(CreateUserInGroupResponse, _super);
    function CreateUserInGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUserInGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUserInGroupResponse.prototype, "statusCode", void 0);
    return CreateUserInGroupResponse;
}(SpeakeasyBase));
export { CreateUserInGroupResponse };
