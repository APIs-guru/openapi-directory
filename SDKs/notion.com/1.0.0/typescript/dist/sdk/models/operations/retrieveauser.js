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
var RetrieveAUserPathParams = /** @class */ (function (_super) {
    __extends(RetrieveAUserPathParams, _super);
    function RetrieveAUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RetrieveAUserPathParams.prototype, "id", void 0);
    return RetrieveAUserPathParams;
}(SpeakeasyBase));
export { RetrieveAUserPathParams };
var RetrieveAUser200ApplicationJsonPerson = /** @class */ (function (_super) {
    __extends(RetrieveAUser200ApplicationJsonPerson, _super);
    function RetrieveAUser200ApplicationJsonPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], RetrieveAUser200ApplicationJsonPerson.prototype, "email", void 0);
    return RetrieveAUser200ApplicationJsonPerson;
}(SpeakeasyBase));
export { RetrieveAUser200ApplicationJsonPerson };
var RetrieveAUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveAUser200ApplicationJson, _super);
    function RetrieveAUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", Object)
    ], RetrieveAUser200ApplicationJson.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAUser200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveAUser200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveAUser200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", RetrieveAUser200ApplicationJsonPerson)
    ], RetrieveAUser200ApplicationJson.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAUser200ApplicationJson.prototype, "type", void 0);
    return RetrieveAUser200ApplicationJson;
}(SpeakeasyBase));
export { RetrieveAUser200ApplicationJson };
var RetrieveAUserRequest = /** @class */ (function (_super) {
    __extends(RetrieveAUserRequest, _super);
    function RetrieveAUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveAUserPathParams)
    ], RetrieveAUserRequest.prototype, "pathParams", void 0);
    return RetrieveAUserRequest;
}(SpeakeasyBase));
export { RetrieveAUserRequest };
var RetrieveAUserResponse = /** @class */ (function (_super) {
    __extends(RetrieveAUserResponse, _super);
    function RetrieveAUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveAUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RetrieveAUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveAUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveAUser200ApplicationJson)
    ], RetrieveAUserResponse.prototype, "retrieveAUser200ApplicationJsonObject", void 0);
    return RetrieveAUserResponse;
}(SpeakeasyBase));
export { RetrieveAUserResponse };
