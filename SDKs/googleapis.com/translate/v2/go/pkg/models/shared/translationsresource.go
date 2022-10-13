package shared

type TranslationsResource struct {
	DetectedSourceLanguage *string `json:"detectedSourceLanguage"`
	Model                  *string `json:"model"`
	TranslatedText         *string `json:"translatedText"`
}
