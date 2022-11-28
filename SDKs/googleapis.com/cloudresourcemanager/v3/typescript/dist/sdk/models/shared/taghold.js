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
// TagHold
/**
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
var TagHold = /** @class */ (function (_super) {
    __extends(TagHold, _super);
    function TagHold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], TagHold.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpLink" }),
        __metadata("design:type", String)
    ], TagHold.prototype, "helpLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holder" }),
        __metadata("design:type", String)
    ], TagHold.prototype, "holder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagHold.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], TagHold.prototype, "origin", void 0);
    return TagHold;
}(SpeakeasyBase));
export { TagHold };
// TagHoldInput
/**
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
var TagHoldInput = /** @class */ (function (_super) {
    __extends(TagHoldInput, _super);
    function TagHoldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpLink" }),
        __metadata("design:type", String)
    ], TagHoldInput.prototype, "helpLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holder" }),
        __metadata("design:type", String)
    ], TagHoldInput.prototype, "holder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], TagHoldInput.prototype, "origin", void 0);
    return TagHoldInput;
}(SpeakeasyBase));
export { TagHoldInput };
