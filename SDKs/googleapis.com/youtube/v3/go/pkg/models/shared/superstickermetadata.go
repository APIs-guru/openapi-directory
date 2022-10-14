package shared

type SuperStickerMetadata struct {
	AltText         *string `json:"altText,omitempty"`
	AltTextLanguage *string `json:"altTextLanguage,omitempty"`
	StickerID       *string `json:"stickerId,omitempty"`
}
