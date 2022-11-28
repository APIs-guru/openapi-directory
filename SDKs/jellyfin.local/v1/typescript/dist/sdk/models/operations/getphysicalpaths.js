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
var GetPhysicalPathsSecurity = /** @class */ (function (_super) {
    __extends(GetPhysicalPathsSecurity, _super);
    function GetPhysicalPathsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPhysicalPathsSecurity.prototype, "customAuthentication", void 0);
    return GetPhysicalPathsSecurity;
}(SpeakeasyBase));
export { GetPhysicalPathsSecurity };
var GetPhysicalPathsRequest = /** @class */ (function (_super) {
    __extends(GetPhysicalPathsRequest, _super);
    function GetPhysicalPathsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhysicalPathsSecurity)
    ], GetPhysicalPathsRequest.prototype, "security", void 0);
    return GetPhysicalPathsRequest;
}(SpeakeasyBase));
export { GetPhysicalPathsRequest };
var GetPhysicalPathsResponse = /** @class */ (function (_super) {
    __extends(GetPhysicalPathsResponse, _super);
    function GetPhysicalPathsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhysicalPathsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetPhysicalPathsResponse.prototype, "getPhysicalPaths200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhysicalPathsResponse.prototype, "statusCode", void 0);
    return GetPhysicalPathsResponse;
}(SpeakeasyBase));
export { GetPhysicalPathsResponse };
