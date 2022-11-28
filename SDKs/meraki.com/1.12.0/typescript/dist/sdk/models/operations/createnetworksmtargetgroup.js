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
var CreateNetworkSmTargetGroupPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSmTargetGroupPathParams, _super);
    function CreateNetworkSmTargetGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSmTargetGroupPathParams.prototype, "networkId", void 0);
    return CreateNetworkSmTargetGroupPathParams;
}(SpeakeasyBase));
export { CreateNetworkSmTargetGroupPathParams };
var CreateNetworkSmTargetGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSmTargetGroupRequestBody, _super);
    function CreateNetworkSmTargetGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkSmTargetGroupRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], CreateNetworkSmTargetGroupRequestBody.prototype, "scope", void 0);
    return CreateNetworkSmTargetGroupRequestBody;
}(SpeakeasyBase));
export { CreateNetworkSmTargetGroupRequestBody };
var CreateNetworkSmTargetGroupRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSmTargetGroupRequest, _super);
    function CreateNetworkSmTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkSmTargetGroupPathParams)
    ], CreateNetworkSmTargetGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSmTargetGroupRequestBody)
    ], CreateNetworkSmTargetGroupRequest.prototype, "request", void 0);
    return CreateNetworkSmTargetGroupRequest;
}(SpeakeasyBase));
export { CreateNetworkSmTargetGroupRequest };
var CreateNetworkSmTargetGroupResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSmTargetGroupResponse, _super);
    function CreateNetworkSmTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkSmTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkSmTargetGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkSmTargetGroupResponse.prototype, "createNetworkSmTargetGroup201ApplicationJsonObject", void 0);
    return CreateNetworkSmTargetGroupResponse;
}(SpeakeasyBase));
export { CreateNetworkSmTargetGroupResponse };
