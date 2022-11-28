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
var GetRealmGroupByPathPathPathParams = /** @class */ (function (_super) {
    __extends(GetRealmGroupByPathPathPathParams, _super);
    function GetRealmGroupByPathPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetRealmGroupByPathPathPathParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmGroupByPathPathPathParams.prototype, "realm", void 0);
    return GetRealmGroupByPathPathPathParams;
}(SpeakeasyBase));
export { GetRealmGroupByPathPathPathParams };
var GetRealmGroupByPathPathRequest = /** @class */ (function (_super) {
    __extends(GetRealmGroupByPathPathRequest, _super);
    function GetRealmGroupByPathPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmGroupByPathPathPathParams)
    ], GetRealmGroupByPathPathRequest.prototype, "pathParams", void 0);
    return GetRealmGroupByPathPathRequest;
}(SpeakeasyBase));
export { GetRealmGroupByPathPathRequest };
var GetRealmGroupByPathPathResponse = /** @class */ (function (_super) {
    __extends(GetRealmGroupByPathPathResponse, _super);
    function GetRealmGroupByPathPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmGroupByPathPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupRepresentation)
    ], GetRealmGroupByPathPathResponse.prototype, "groupRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmGroupByPathPathResponse.prototype, "statusCode", void 0);
    return GetRealmGroupByPathPathResponse;
}(SpeakeasyBase));
export { GetRealmGroupByPathPathResponse };
