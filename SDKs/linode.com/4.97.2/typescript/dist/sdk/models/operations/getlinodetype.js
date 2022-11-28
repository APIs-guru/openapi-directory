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
var GetLinodeTypePathParams = /** @class */ (function (_super) {
    __extends(GetLinodeTypePathParams, _super);
    function GetLinodeTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeId" }),
        __metadata("design:type", String)
    ], GetLinodeTypePathParams.prototype, "typeId", void 0);
    return GetLinodeTypePathParams;
}(SpeakeasyBase));
export { GetLinodeTypePathParams };
var GetLinodeTypeDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeTypeDefaultApplicationJson, _super);
    function GetLinodeTypeDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeTypeDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeTypeDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeTypeDefaultApplicationJson };
var GetLinodeTypeRequest = /** @class */ (function (_super) {
    __extends(GetLinodeTypeRequest, _super);
    function GetLinodeTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTypePathParams)
    ], GetLinodeTypeRequest.prototype, "pathParams", void 0);
    return GetLinodeTypeRequest;
}(SpeakeasyBase));
export { GetLinodeTypeRequest };
var GetLinodeTypeResponse = /** @class */ (function (_super) {
    __extends(GetLinodeTypeResponse, _super);
    function GetLinodeTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeType)
    ], GetLinodeTypeResponse.prototype, "linodeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTypeDefaultApplicationJson)
    ], GetLinodeTypeResponse.prototype, "getLinodeTypeDefaultApplicationJsonObject", void 0);
    return GetLinodeTypeResponse;
}(SpeakeasyBase));
export { GetLinodeTypeResponse };
