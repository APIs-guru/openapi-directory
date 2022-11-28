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
export var MembershipStateCodeEnum;
(function (MembershipStateCodeEnum) {
    MembershipStateCodeEnum["CodeUnspecified"] = "CODE_UNSPECIFIED";
    MembershipStateCodeEnum["Creating"] = "CREATING";
    MembershipStateCodeEnum["Ready"] = "READY";
    MembershipStateCodeEnum["Deleting"] = "DELETING";
    MembershipStateCodeEnum["Updating"] = "UPDATING";
    MembershipStateCodeEnum["ServiceUpdating"] = "SERVICE_UPDATING";
})(MembershipStateCodeEnum || (MembershipStateCodeEnum = {}));
// MembershipStateInput
/**
 * State of the Membership resource.
**/
var MembershipStateInput = /** @class */ (function (_super) {
    __extends(MembershipStateInput, _super);
    function MembershipStateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MembershipStateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], MembershipStateInput.prototype, "updateTime", void 0);
    return MembershipStateInput;
}(SpeakeasyBase));
export { MembershipStateInput };
// MembershipState
/**
 * State of the Membership resource.
**/
var MembershipState = /** @class */ (function (_super) {
    __extends(MembershipState, _super);
    function MembershipState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], MembershipState.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MembershipState.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], MembershipState.prototype, "updateTime", void 0);
    return MembershipState;
}(SpeakeasyBase));
export { MembershipState };
