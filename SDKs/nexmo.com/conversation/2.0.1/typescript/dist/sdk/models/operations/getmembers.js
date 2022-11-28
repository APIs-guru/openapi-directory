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
var GetMembersPathParams = /** @class */ (function (_super) {
    __extends(GetMembersPathParams, _super);
    function GetMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], GetMembersPathParams.prototype, "conversationId", void 0);
    return GetMembersPathParams;
}(SpeakeasyBase));
export { GetMembersPathParams };
var GetMembers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMembers200ApplicationJson, _super);
    function GetMembers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetMembers200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetMembers200ApplicationJson.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], GetMembers200ApplicationJson.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], GetMembers200ApplicationJson.prototype, "userName", void 0);
    return GetMembers200ApplicationJson;
}(SpeakeasyBase));
export { GetMembers200ApplicationJson };
var GetMembersRequest = /** @class */ (function (_super) {
    __extends(GetMembersRequest, _super);
    function GetMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMembersPathParams)
    ], GetMembersRequest.prototype, "pathParams", void 0);
    return GetMembersRequest;
}(SpeakeasyBase));
export { GetMembersRequest };
var GetMembersResponse = /** @class */ (function (_super) {
    __extends(GetMembersResponse, _super);
    function GetMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetMembers200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetMembersResponse.prototype, "getMembers200ApplicationJsonObjects", void 0);
    return GetMembersResponse;
}(SpeakeasyBase));
export { GetMembersResponse };
