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
var GetemailinfoQueryParams = /** @class */ (function (_super) {
    __extends(GetemailinfoQueryParams, _super);
    function GetemailinfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetemailinfoQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetemailinfoQueryParams.prototype, "license", void 0);
    return GetemailinfoQueryParams;
}(SpeakeasyBase));
export { GetemailinfoQueryParams };
var Getemailinfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getemailinfo200ApplicationJson, _super);
    function Getemailinfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Geolocation" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "geolocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Info" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDisposable" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isDisposable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsEducational" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isEducational", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsGeneric" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isGeneric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsGovernment" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isGovernment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsOrganizational" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isOrganizational", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsVulgar" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "isVulgar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Response" }),
        __metadata("design:type", String)
    ], Getemailinfo200ApplicationJson.prototype, "response", void 0);
    return Getemailinfo200ApplicationJson;
}(SpeakeasyBase));
export { Getemailinfo200ApplicationJson };
var GetemailinfoRequest = /** @class */ (function (_super) {
    __extends(GetemailinfoRequest, _super);
    function GetemailinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetemailinfoQueryParams)
    ], GetemailinfoRequest.prototype, "queryParams", void 0);
    return GetemailinfoRequest;
}(SpeakeasyBase));
export { GetemailinfoRequest };
var GetemailinfoResponse = /** @class */ (function (_super) {
    __extends(GetemailinfoResponse, _super);
    function GetemailinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetemailinfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetemailinfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getemailinfo200ApplicationJson)
    ], GetemailinfoResponse.prototype, "getemailinfo200ApplicationJsonObject", void 0);
    return GetemailinfoResponse;
}(SpeakeasyBase));
export { GetemailinfoResponse };
