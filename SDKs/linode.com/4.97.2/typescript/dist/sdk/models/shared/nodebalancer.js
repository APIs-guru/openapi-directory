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
// NodeBalancerTransfer
/**
 * Information about the amount of transfer this NodeBalancer has had so far this month.
 *
**/
var NodeBalancerTransfer = /** @class */ (function (_super) {
    __extends(NodeBalancerTransfer, _super);
    function NodeBalancerTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", Number)
    ], NodeBalancerTransfer.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", Number)
    ], NodeBalancerTransfer.prototype, "out", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], NodeBalancerTransfer.prototype, "total", void 0);
    return NodeBalancerTransfer;
}(SpeakeasyBase));
export { NodeBalancerTransfer };
// NodeBalancer
/**
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 *
**/
var NodeBalancer = /** @class */ (function (_super) {
    __extends(NodeBalancer, _super);
    function NodeBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_conn_throttle" }),
        __metadata("design:type", Number)
    ], NodeBalancer.prototype, "clientConnThrottle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], NodeBalancer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], NodeBalancer.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NodeBalancer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", String)
    ], NodeBalancer.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", String)
    ], NodeBalancer.prototype, "ipv6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NodeBalancer.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], NodeBalancer.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodeBalancer.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer" }),
        __metadata("design:type", NodeBalancerTransfer)
    ], NodeBalancer.prototype, "transfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], NodeBalancer.prototype, "updated", void 0);
    return NodeBalancer;
}(SpeakeasyBase));
export { NodeBalancer };
// NodeBalancerInput
/**
 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
 *
**/
var NodeBalancerInput = /** @class */ (function (_super) {
    __extends(NodeBalancerInput, _super);
    function NodeBalancerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_conn_throttle" }),
        __metadata("design:type", Number)
    ], NodeBalancerInput.prototype, "clientConnThrottle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NodeBalancerInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodeBalancerInput.prototype, "tags", void 0);
    return NodeBalancerInput;
}(SpeakeasyBase));
export { NodeBalancerInput };
