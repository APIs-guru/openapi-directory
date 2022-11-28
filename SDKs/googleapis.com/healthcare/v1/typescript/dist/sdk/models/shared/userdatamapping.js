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
import { Attribute } from "./attribute";
// UserDataMapping
/**
 * Maps a resource to the associated user and Attributes.
**/
var UserDataMapping = /** @class */ (function (_super) {
    __extends(UserDataMapping, _super);
    function UserDataMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archiveTime" }),
        __metadata("design:type", String)
    ], UserDataMapping.prototype, "archiveTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], UserDataMapping.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataId" }),
        __metadata("design:type", String)
    ], UserDataMapping.prototype, "dataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserDataMapping.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceAttributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], UserDataMapping.prototype, "resourceAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UserDataMapping.prototype, "userId", void 0);
    return UserDataMapping;
}(SpeakeasyBase));
export { UserDataMapping };
// UserDataMappingInput
/**
 * Maps a resource to the associated user and Attributes.
**/
var UserDataMappingInput = /** @class */ (function (_super) {
    __extends(UserDataMappingInput, _super);
    function UserDataMappingInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataId" }),
        __metadata("design:type", String)
    ], UserDataMappingInput.prototype, "dataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserDataMappingInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceAttributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], UserDataMappingInput.prototype, "resourceAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UserDataMappingInput.prototype, "userId", void 0);
    return UserDataMappingInput;
}(SpeakeasyBase));
export { UserDataMappingInput };
