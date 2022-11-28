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
export var PostFloatingIpsCreateFloatingIpRequestTypeEnum;
(function (PostFloatingIpsCreateFloatingIpRequestTypeEnum) {
    PostFloatingIpsCreateFloatingIpRequestTypeEnum["Ipv4"] = "ipv4";
    PostFloatingIpsCreateFloatingIpRequestTypeEnum["Ipv6"] = "ipv6";
})(PostFloatingIpsCreateFloatingIpRequestTypeEnum || (PostFloatingIpsCreateFloatingIpRequestTypeEnum = {}));
var PostFloatingIpsCreateFloatingIpRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsCreateFloatingIpRequest, _super);
    function PostFloatingIpsCreateFloatingIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_location" }),
        __metadata("design:type", String)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "homeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpsCreateFloatingIpRequest.prototype, "type", void 0);
    return PostFloatingIpsCreateFloatingIpRequest;
}(SpeakeasyBase));
export { PostFloatingIpsCreateFloatingIpRequest };
// PostFloatingIps201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFloatingIps201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonActionError, _super);
    function PostFloatingIps201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonActionError.prototype, "message", void 0);
    return PostFloatingIps201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonActionError };
var PostFloatingIps201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonActionResources, _super);
    function PostFloatingIps201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostFloatingIps201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonActionResources };
export var PostFloatingIps201ApplicationJsonActionStatusEnum;
(function (PostFloatingIps201ApplicationJsonActionStatusEnum) {
    PostFloatingIps201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostFloatingIps201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostFloatingIps201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostFloatingIps201ApplicationJsonActionStatusEnum || (PostFloatingIps201ApplicationJsonActionStatusEnum = {}));
var PostFloatingIps201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonAction, _super);
    function PostFloatingIps201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFloatingIps201ApplicationJsonActionError)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIps201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonAction.prototype, "status", void 0);
    return PostFloatingIps201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonAction };
var PostFloatingIps201ApplicationJsonFloatingIpDnsPtr = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonFloatingIpDnsPtr, _super);
    function PostFloatingIps201ApplicationJsonFloatingIpDnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpDnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpDnsPtr.prototype, "ip", void 0);
    return PostFloatingIps201ApplicationJsonFloatingIpDnsPtr;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonFloatingIpDnsPtr };
// PostFloatingIps201ApplicationJsonFloatingIpHomeLocation
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
var PostFloatingIps201ApplicationJsonFloatingIpHomeLocation = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonFloatingIpHomeLocation, _super);
    function PostFloatingIps201ApplicationJsonFloatingIpHomeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIpHomeLocation.prototype, "networkZone", void 0);
    return PostFloatingIps201ApplicationJsonFloatingIpHomeLocation;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonFloatingIpHomeLocation };
// PostFloatingIps201ApplicationJsonFloatingIpProtection
/**
 * Protection configuration for the Resource
**/
var PostFloatingIps201ApplicationJsonFloatingIpProtection = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonFloatingIpProtection, _super);
    function PostFloatingIps201ApplicationJsonFloatingIpProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostFloatingIps201ApplicationJsonFloatingIpProtection.prototype, "delete", void 0);
    return PostFloatingIps201ApplicationJsonFloatingIpProtection;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonFloatingIpProtection };
export var PostFloatingIps201ApplicationJsonFloatingIpTypeEnum;
(function (PostFloatingIps201ApplicationJsonFloatingIpTypeEnum) {
    PostFloatingIps201ApplicationJsonFloatingIpTypeEnum["Ipv4"] = "ipv4";
    PostFloatingIps201ApplicationJsonFloatingIpTypeEnum["Ipv6"] = "ipv6";
})(PostFloatingIps201ApplicationJsonFloatingIpTypeEnum || (PostFloatingIps201ApplicationJsonFloatingIpTypeEnum = {}));
var PostFloatingIps201ApplicationJsonFloatingIp = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJsonFloatingIp, _super);
    function PostFloatingIps201ApplicationJsonFloatingIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PostFloatingIps201ApplicationJsonFloatingIpDnsPtr }),
        __metadata("design:type", Array)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_location" }),
        __metadata("design:type", PostFloatingIps201ApplicationJsonFloatingIpHomeLocation)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "homeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostFloatingIps201ApplicationJsonFloatingIpProtection)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIps201ApplicationJsonFloatingIp.prototype, "type", void 0);
    return PostFloatingIps201ApplicationJsonFloatingIp;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJsonFloatingIp };
var PostFloatingIps201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostFloatingIps201ApplicationJson, _super);
    function PostFloatingIps201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostFloatingIps201ApplicationJsonAction)
    ], PostFloatingIps201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ip" }),
        __metadata("design:type", PostFloatingIps201ApplicationJsonFloatingIp)
    ], PostFloatingIps201ApplicationJson.prototype, "floatingIp", void 0);
    return PostFloatingIps201ApplicationJson;
}(SpeakeasyBase));
export { PostFloatingIps201ApplicationJson };
var PostFloatingIpsRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsRequest, _super);
    function PostFloatingIpsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFloatingIpsCreateFloatingIpRequest)
    ], PostFloatingIpsRequest.prototype, "request", void 0);
    return PostFloatingIpsRequest;
}(SpeakeasyBase));
export { PostFloatingIpsRequest };
var PostFloatingIpsResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsResponse, _super);
    function PostFloatingIpsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFloatingIpsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIps201ApplicationJson)
    ], PostFloatingIpsResponse.prototype, "postFloatingIps201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFloatingIpsResponse.prototype, "statusCode", void 0);
    return PostFloatingIpsResponse;
}(SpeakeasyBase));
export { PostFloatingIpsResponse };
