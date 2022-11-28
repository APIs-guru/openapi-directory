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
import { CustomBiddingScriptRef } from "./custombiddingscriptref";
import { ScriptError } from "./scripterror";
export var CustomBiddingScriptStateEnum;
(function (CustomBiddingScriptStateEnum) {
    CustomBiddingScriptStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CustomBiddingScriptStateEnum["Accepted"] = "ACCEPTED";
    CustomBiddingScriptStateEnum["Rejected"] = "REJECTED";
    CustomBiddingScriptStateEnum["Pending"] = "PENDING";
})(CustomBiddingScriptStateEnum || (CustomBiddingScriptStateEnum = {}));
// CustomBiddingScriptInput
/**
 * A single custom bidding script.
**/
var CustomBiddingScriptInput = /** @class */ (function (_super) {
    __extends(CustomBiddingScriptInput, _super);
    function CustomBiddingScriptInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", CustomBiddingScriptRef)
    ], CustomBiddingScriptInput.prototype, "script", void 0);
    return CustomBiddingScriptInput;
}(SpeakeasyBase));
export { CustomBiddingScriptInput };
// CustomBiddingScript
/**
 * A single custom bidding script.
**/
var CustomBiddingScript = /** @class */ (function (_super) {
    __extends(CustomBiddingScript, _super);
    function CustomBiddingScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CustomBiddingScript.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CustomBiddingScript.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], CustomBiddingScript.prototype, "customBiddingAlgorithmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingScriptId" }),
        __metadata("design:type", String)
    ], CustomBiddingScript.prototype, "customBiddingScriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ScriptError }),
        __metadata("design:type", Array)
    ], CustomBiddingScript.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomBiddingScript.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", CustomBiddingScriptRef)
    ], CustomBiddingScript.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CustomBiddingScript.prototype, "state", void 0);
    return CustomBiddingScript;
}(SpeakeasyBase));
export { CustomBiddingScript };
