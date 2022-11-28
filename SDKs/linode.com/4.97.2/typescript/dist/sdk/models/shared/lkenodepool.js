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
import { LkeNodeStatus } from "./lkenodestatus";
export var LkeNodePoolDisksTypeEnum;
(function (LkeNodePoolDisksTypeEnum) {
    LkeNodePoolDisksTypeEnum["Raw"] = "raw";
    LkeNodePoolDisksTypeEnum["Ext4"] = "ext4";
})(LkeNodePoolDisksTypeEnum || (LkeNodePoolDisksTypeEnum = {}));
// LkeNodePoolDisks
/**
 * The values to assign to each partition in this Node Pool's custom disk layout.
 *
**/
var LkeNodePoolDisks = /** @class */ (function (_super) {
    __extends(LkeNodePoolDisks, _super);
    function LkeNodePoolDisks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], LkeNodePoolDisks.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LkeNodePoolDisks.prototype, "type", void 0);
    return LkeNodePoolDisks;
}(SpeakeasyBase));
export { LkeNodePoolDisks };
// LkeNodePool
/**
 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
 *
**/
var LkeNodePool = /** @class */ (function (_super) {
    __extends(LkeNodePool, _super);
    function LkeNodePool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], LkeNodePool.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks", elemType: LkeNodePoolDisks }),
        __metadata("design:type", Array)
    ], LkeNodePool.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LkeNodePool.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: LkeNodeStatus }),
        __metadata("design:type", Array)
    ], LkeNodePool.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], LkeNodePool.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LkeNodePool.prototype, "type", void 0);
    return LkeNodePool;
}(SpeakeasyBase));
export { LkeNodePool };
