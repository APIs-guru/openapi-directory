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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetConsumerV1ServicegroupsIdPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsIdPathParams, _super);
    function GetConsumerV1ServicegroupsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicegroupsIdPathParams.prototype, "id", void 0);
    return GetConsumerV1ServicegroupsIdPathParams;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsIdPathParams };
var GetConsumerV1ServicegroupsIdRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsIdRequest, _super);
    function GetConsumerV1ServicegroupsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1ServicegroupsIdPathParams)
    ], GetConsumerV1ServicegroupsIdRequest.prototype, "pathParams", void 0);
    return GetConsumerV1ServicegroupsIdRequest;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsIdRequest };
var GetConsumerV1ServicegroupsIdResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsIdResponse, _super);
    function GetConsumerV1ServicegroupsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1ServicegroupsIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServiceGroupViewModel)
    ], GetConsumerV1ServicegroupsIdResponse.prototype, "serviceGroupViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicegroupsIdResponse.prototype, "statusCode", void 0);
    return GetConsumerV1ServicegroupsIdResponse;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsIdResponse };
