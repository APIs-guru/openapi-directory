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
export var WritablePowerFeedPhaseEnum;
(function (WritablePowerFeedPhaseEnum) {
    WritablePowerFeedPhaseEnum["SinglePhase"] = "single-phase";
    WritablePowerFeedPhaseEnum["ThreePhase"] = "three-phase";
})(WritablePowerFeedPhaseEnum || (WritablePowerFeedPhaseEnum = {}));
export var WritablePowerFeedStatusEnum;
(function (WritablePowerFeedStatusEnum) {
    WritablePowerFeedStatusEnum["Offline"] = "offline";
    WritablePowerFeedStatusEnum["Active"] = "active";
    WritablePowerFeedStatusEnum["Planned"] = "planned";
    WritablePowerFeedStatusEnum["Failed"] = "failed";
})(WritablePowerFeedStatusEnum || (WritablePowerFeedStatusEnum = {}));
export var WritablePowerFeedSupplyEnum;
(function (WritablePowerFeedSupplyEnum) {
    WritablePowerFeedSupplyEnum["Ac"] = "ac";
    WritablePowerFeedSupplyEnum["Dc"] = "dc";
})(WritablePowerFeedSupplyEnum || (WritablePowerFeedSupplyEnum = {}));
export var WritablePowerFeedTypeEnum;
(function (WritablePowerFeedTypeEnum) {
    WritablePowerFeedTypeEnum["Primary"] = "primary";
    WritablePowerFeedTypeEnum["Redundant"] = "redundant";
})(WritablePowerFeedTypeEnum || (WritablePowerFeedTypeEnum = {}));
var WritablePowerFeedInput = /** @class */ (function (_super) {
    __extends(WritablePowerFeedInput, _super);
    function WritablePowerFeedInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amperage" }),
        __metadata("design:type", Number)
    ], WritablePowerFeedInput.prototype, "amperage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], WritablePowerFeedInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_utilization" }),
        __metadata("design:type", Number)
    ], WritablePowerFeedInput.prototype, "maxUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "phase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_panel" }),
        __metadata("design:type", Number)
    ], WritablePowerFeedInput.prototype, "powerPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rack" }),
        __metadata("design:type", Number)
    ], WritablePowerFeedInput.prototype, "rack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supply" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "supply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritablePowerFeedInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritablePowerFeedInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voltage" }),
        __metadata("design:type", Number)
    ], WritablePowerFeedInput.prototype, "voltage", void 0);
    return WritablePowerFeedInput;
}(SpeakeasyBase));
export { WritablePowerFeedInput };
