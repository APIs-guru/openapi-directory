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
// ManagedContactPhone
/**
 * Information about how to reach this Contact by phone.
 *
**/
var ManagedContactPhone = /** @class */ (function (_super) {
    __extends(ManagedContactPhone, _super);
    function ManagedContactPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", String)
    ], ManagedContactPhone.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary" }),
        __metadata("design:type", String)
    ], ManagedContactPhone.prototype, "secondary", void 0);
    return ManagedContactPhone;
}(SpeakeasyBase));
export { ManagedContactPhone };
// ManagedContactInput
/**
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 *
**/
var ManagedContactInput = /** @class */ (function (_super) {
    __extends(ManagedContactInput, _super);
    function ManagedContactInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ManagedContactInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], ManagedContactInput.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ManagedContactInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", ManagedContactPhone)
    ], ManagedContactInput.prototype, "phone", void 0);
    return ManagedContactInput;
}(SpeakeasyBase));
export { ManagedContactInput };
// ManagedContact
/**
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 *
**/
var ManagedContact = /** @class */ (function (_super) {
    __extends(ManagedContact, _super);
    function ManagedContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ManagedContact.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], ManagedContact.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ManagedContact.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ManagedContact.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", ManagedContactPhone)
    ], ManagedContact.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], ManagedContact.prototype, "updated", void 0);
    return ManagedContact;
}(SpeakeasyBase));
export { ManagedContact };
