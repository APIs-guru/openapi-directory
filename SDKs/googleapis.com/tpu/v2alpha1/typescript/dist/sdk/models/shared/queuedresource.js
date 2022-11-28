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
import { Guaranteed } from "./guaranteed";
import { QueueingPolicy } from "./queueingpolicy";
import { QueuedResourceState } from "./queuedresourcestate";
import { TpuInput } from "./tpu";
import { Tpu } from "./tpu";
// QueuedResourceInput
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
var QueuedResourceInput = /** @class */ (function (_super) {
    __extends(QueuedResourceInput, _super);
    function QueuedResourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestEffort" }),
        __metadata("design:type", Map)
    ], QueuedResourceInput.prototype, "bestEffort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteed" }),
        __metadata("design:type", Guaranteed)
    ], QueuedResourceInput.prototype, "guaranteed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queueingPolicy" }),
        __metadata("design:type", QueueingPolicy)
    ], QueuedResourceInput.prototype, "queueingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", QueuedResourceState)
    ], QueuedResourceInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpu" }),
        __metadata("design:type", TpuInput)
    ], QueuedResourceInput.prototype, "tpu", void 0);
    return QueuedResourceInput;
}(SpeakeasyBase));
export { QueuedResourceInput };
// QueuedResource
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
var QueuedResource = /** @class */ (function (_super) {
    __extends(QueuedResource, _super);
    function QueuedResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestEffort" }),
        __metadata("design:type", Map)
    ], QueuedResource.prototype, "bestEffort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guaranteed" }),
        __metadata("design:type", Guaranteed)
    ], QueuedResource.prototype, "guaranteed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueuedResource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queueingPolicy" }),
        __metadata("design:type", QueueingPolicy)
    ], QueuedResource.prototype, "queueingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", QueuedResourceState)
    ], QueuedResource.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpu" }),
        __metadata("design:type", Tpu)
    ], QueuedResource.prototype, "tpu", void 0);
    return QueuedResource;
}(SpeakeasyBase));
export { QueuedResource };
