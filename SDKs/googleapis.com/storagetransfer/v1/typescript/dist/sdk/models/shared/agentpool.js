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
import { BandwidthLimit } from "./bandwidthlimit";
export var AgentPoolStateEnum;
(function (AgentPoolStateEnum) {
    AgentPoolStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    AgentPoolStateEnum["Creating"] = "CREATING";
    AgentPoolStateEnum["Created"] = "CREATED";
    AgentPoolStateEnum["Deleting"] = "DELETING";
})(AgentPoolStateEnum || (AgentPoolStateEnum = {}));
// AgentPool
/**
 * Represents an On-Premises Agent pool.
**/
var AgentPool = /** @class */ (function (_super) {
    __extends(AgentPool, _super);
    function AgentPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimit" }),
        __metadata("design:type", BandwidthLimit)
    ], AgentPool.prototype, "bandwidthLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AgentPool.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AgentPool.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AgentPool.prototype, "state", void 0);
    return AgentPool;
}(SpeakeasyBase));
export { AgentPool };
// AgentPoolInput
/**
 * Represents an On-Premises Agent pool.
**/
var AgentPoolInput = /** @class */ (function (_super) {
    __extends(AgentPoolInput, _super);
    function AgentPoolInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimit" }),
        __metadata("design:type", BandwidthLimit)
    ], AgentPoolInput.prototype, "bandwidthLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AgentPoolInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AgentPoolInput.prototype, "name", void 0);
    return AgentPoolInput;
}(SpeakeasyBase));
export { AgentPoolInput };
