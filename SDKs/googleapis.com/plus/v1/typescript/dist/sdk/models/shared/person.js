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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
// PersonAgeRange
/**
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
**/
var PersonAgeRange = /** @class */ (function (_super) {
    __extends(PersonAgeRange, _super);
    function PersonAgeRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], PersonAgeRange.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "json, name=min" }),
        __metadata("design:type", Number)
    ], PersonAgeRange.prototype, "min", void 0);
    return PersonAgeRange;
}(SpeakeasyBase));
export { PersonAgeRange };
// PersonCoverCoverInfo
/**
 * Extra information about the cover photo.
**/
var PersonCoverCoverInfo = /** @class */ (function (_super) {
    __extends(PersonCoverCoverInfo, _super);
    function PersonCoverCoverInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=leftImageOffset" }),
        __metadata("design:type", Number)
    ], PersonCoverCoverInfo.prototype, "leftImageOffset", void 0);
    __decorate([
        Metadata({ data: "json, name=topImageOffset" }),
        __metadata("design:type", Number)
    ], PersonCoverCoverInfo.prototype, "topImageOffset", void 0);
    return PersonCoverCoverInfo;
}(SpeakeasyBase));
export { PersonCoverCoverInfo };
// PersonCoverCoverPhoto
/**
 * The person's primary cover image.
**/
var PersonCoverCoverPhoto = /** @class */ (function (_super) {
    __extends(PersonCoverCoverPhoto, _super);
    function PersonCoverCoverPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], PersonCoverCoverPhoto.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PersonCoverCoverPhoto.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], PersonCoverCoverPhoto.prototype, "width", void 0);
    return PersonCoverCoverPhoto;
}(SpeakeasyBase));
export { PersonCoverCoverPhoto };
// PersonCover
/**
 * The cover photo content.
**/
var PersonCover = /** @class */ (function (_super) {
    __extends(PersonCover, _super);
    function PersonCover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=coverInfo" }),
        __metadata("design:type", PersonCoverCoverInfo)
    ], PersonCover.prototype, "coverInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=coverPhoto" }),
        __metadata("design:type", PersonCoverCoverPhoto)
    ], PersonCover.prototype, "coverPhoto", void 0);
    __decorate([
        Metadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], PersonCover.prototype, "layout", void 0);
    return PersonCover;
}(SpeakeasyBase));
export { PersonCover };
var PersonEmails = /** @class */ (function (_super) {
    __extends(PersonEmails, _super);
    function PersonEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PersonEmails.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PersonEmails.prototype, "value", void 0);
    return PersonEmails;
}(SpeakeasyBase));
export { PersonEmails };
// PersonImage
/**
 * The representation of the person's profile photo.
**/
var PersonImage = /** @class */ (function (_super) {
    __extends(PersonImage, _super);
    function PersonImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], PersonImage.prototype, "isDefault", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PersonImage.prototype, "url", void 0);
    return PersonImage;
}(SpeakeasyBase));
export { PersonImage };
// PersonName
/**
 * An object representation of the individual components of a person's name.
**/
var PersonName = /** @class */ (function (_super) {
    __extends(PersonName, _super);
    function PersonName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "familyName", void 0);
    __decorate([
        Metadata({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "formatted", void 0);
    __decorate([
        Metadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "givenName", void 0);
    __decorate([
        Metadata({ data: "json, name=honorificPrefix" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "honorificPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=honorificSuffix" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "honorificSuffix", void 0);
    __decorate([
        Metadata({ data: "json, name=middleName" }),
        __metadata("design:type", String)
    ], PersonName.prototype, "middleName", void 0);
    return PersonName;
}(SpeakeasyBase));
export { PersonName };
var PersonOrganizations = /** @class */ (function (_super) {
    __extends(PersonOrganizations, _super);
    function PersonOrganizations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "department", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], PersonOrganizations.prototype, "primary", void 0);
    __decorate([
        Metadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PersonOrganizations.prototype, "type", void 0);
    return PersonOrganizations;
}(SpeakeasyBase));
export { PersonOrganizations };
var PersonPlacesLived = /** @class */ (function (_super) {
    __extends(PersonPlacesLived, _super);
    function PersonPlacesLived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], PersonPlacesLived.prototype, "primary", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PersonPlacesLived.prototype, "value", void 0);
    return PersonPlacesLived;
}(SpeakeasyBase));
export { PersonPlacesLived };
var PersonUrls = /** @class */ (function (_super) {
    __extends(PersonUrls, _super);
    function PersonUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PersonUrls.prototype, "label", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PersonUrls.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PersonUrls.prototype, "value", void 0);
    return PersonUrls;
}(SpeakeasyBase));
export { PersonUrls };
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aboutMe" }),
        __metadata("design:type", String)
    ], Person.prototype, "aboutMe", void 0);
    __decorate([
        Metadata({ data: "json, name=ageRange" }),
        __metadata("design:type", PersonAgeRange)
    ], Person.prototype, "ageRange", void 0);
    __decorate([
        Metadata({ data: "json, name=birthday" }),
        __metadata("design:type", String)
    ], Person.prototype, "birthday", void 0);
    __decorate([
        Metadata({ data: "json, name=braggingRights" }),
        __metadata("design:type", String)
    ], Person.prototype, "braggingRights", void 0);
    __decorate([
        Metadata({ data: "json, name=circledByCount" }),
        __metadata("design:type", Number)
    ], Person.prototype, "circledByCount", void 0);
    __decorate([
        Metadata({ data: "json, name=cover" }),
        __metadata("design:type", PersonCover)
    ], Person.prototype, "cover", void 0);
    __decorate([
        Metadata({ data: "json, name=currentLocation" }),
        __metadata("design:type", String)
    ], Person.prototype, "currentLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Person.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Person.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "json, name=emails", elemType: shared.PersonEmails }),
        __metadata("design:type", Array)
    ], Person.prototype, "emails", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Person.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Person.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Person.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", PersonImage)
    ], Person.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=isPlusUser" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "isPlusUser", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Person.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Person.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", PersonName)
    ], Person.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], Person.prototype, "nickname", void 0);
    __decorate([
        Metadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], Person.prototype, "objectType", void 0);
    __decorate([
        Metadata({ data: "json, name=occupation" }),
        __metadata("design:type", String)
    ], Person.prototype, "occupation", void 0);
    __decorate([
        Metadata({ data: "json, name=organizations", elemType: shared.PersonOrganizations }),
        __metadata("design:type", Array)
    ], Person.prototype, "organizations", void 0);
    __decorate([
        Metadata({ data: "json, name=placesLived", elemType: shared.PersonPlacesLived }),
        __metadata("design:type", Array)
    ], Person.prototype, "placesLived", void 0);
    __decorate([
        Metadata({ data: "json, name=plusOneCount" }),
        __metadata("design:type", Number)
    ], Person.prototype, "plusOneCount", void 0);
    __decorate([
        Metadata({ data: "json, name=relationshipStatus" }),
        __metadata("design:type", String)
    ], Person.prototype, "relationshipStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=skills" }),
        __metadata("design:type", String)
    ], Person.prototype, "skills", void 0);
    __decorate([
        Metadata({ data: "json, name=tagline" }),
        __metadata("design:type", String)
    ], Person.prototype, "tagline", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Person.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=urls", elemType: shared.PersonUrls }),
        __metadata("design:type", Array)
    ], Person.prototype, "urls", void 0);
    __decorate([
        Metadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "verified", void 0);
    return Person;
}(SpeakeasyBase));
export { Person };
