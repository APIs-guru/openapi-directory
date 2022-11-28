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
export var NodeBalancerNodeModeEnum;
(function (NodeBalancerNodeModeEnum) {
    NodeBalancerNodeModeEnum["Accept"] = "accept";
    NodeBalancerNodeModeEnum["Reject"] = "reject";
    NodeBalancerNodeModeEnum["Drain"] = "drain";
    NodeBalancerNodeModeEnum["Backup"] = "backup";
})(NodeBalancerNodeModeEnum || (NodeBalancerNodeModeEnum = {}));
export var NodeBalancerNodeStatusEnum;
(function (NodeBalancerNodeStatusEnum) {
    NodeBalancerNodeStatusEnum["Unknown"] = "unknown";
    NodeBalancerNodeStatusEnum["Up"] = "UP";
    NodeBalancerNodeStatusEnum["Down"] = "DOWN";
})(NodeBalancerNodeStatusEnum || (NodeBalancerNodeStatusEnum = {}));
// NodeBalancerNode
/**
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 *
**/
var NodeBalancerNode = /** @class */ (function (_super) {
    __extends(NodeBalancerNode, _super);
    function NodeBalancerNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], NodeBalancerNode.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_id" }),
        __metadata("design:type", Number)
    ], NodeBalancerNode.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NodeBalancerNode.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NodeBalancerNode.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], NodeBalancerNode.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancer_id" }),
        __metadata("design:type", Number)
    ], NodeBalancerNode.prototype, "nodebalancerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeBalancerNode.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], NodeBalancerNode.prototype, "weight", void 0);
    return NodeBalancerNode;
}(SpeakeasyBase));
export { NodeBalancerNode };
// NodeBalancerNodeInput
/**
 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
 *
**/
var NodeBalancerNodeInput = /** @class */ (function (_super) {
    __extends(NodeBalancerNodeInput, _super);
    function NodeBalancerNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], NodeBalancerNodeInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NodeBalancerNodeInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], NodeBalancerNodeInput.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], NodeBalancerNodeInput.prototype, "weight", void 0);
    return NodeBalancerNodeInput;
}(SpeakeasyBase));
export { NodeBalancerNodeInput };
