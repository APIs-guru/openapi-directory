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
var UpdateNetworkSmTargetGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmTargetGroupPathParams, _super);
    function UpdateNetworkSmTargetGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmTargetGroupPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetGroupId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmTargetGroupPathParams.prototype, "targetGroupId", void 0);
    return UpdateNetworkSmTargetGroupPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSmTargetGroupPathParams };
var UpdateNetworkSmTargetGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmTargetGroupRequestBody, _super);
    function UpdateNetworkSmTargetGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmTargetGroupRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmTargetGroupRequestBody.prototype, "scope", void 0);
    return UpdateNetworkSmTargetGroupRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSmTargetGroupRequestBody };
var UpdateNetworkSmTargetGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmTargetGroupRequest, _super);
    function UpdateNetworkSmTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSmTargetGroupPathParams)
    ], UpdateNetworkSmTargetGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSmTargetGroupRequestBody)
    ], UpdateNetworkSmTargetGroupRequest.prototype, "request", void 0);
    return UpdateNetworkSmTargetGroupRequest;
}(SpeakeasyBase));
export { UpdateNetworkSmTargetGroupRequest };
var UpdateNetworkSmTargetGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmTargetGroupResponse, _super);
    function UpdateNetworkSmTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSmTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSmTargetGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSmTargetGroupResponse.prototype, "updateNetworkSmTargetGroup200ApplicationJsonObject", void 0);
    return UpdateNetworkSmTargetGroupResponse;
}(SpeakeasyBase));
export { UpdateNetworkSmTargetGroupResponse };
